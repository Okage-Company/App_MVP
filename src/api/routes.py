"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import timedelta

from flask import Flask, request, jsonify, url_for, Blueprint
#Herramienta para las promesas
from flask_cors import CORS
from sqlalchemy import exc
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

from api.models import db, Account, Client, Business, Services, Reviews, Buservices
from api.utils import generate_sitemap, APIException
import jwt
#Poner API delante
api = Blueprint('api', __name__)

#1-Recibir toda la lista de usuarios
@api.route('/account', methods=['GET'])
def get_user():
    all_user = Account.get_all()
    #Asignamos a all_user todos los usuarios que hemos conseguido llamando
    #a la clase account con el class method get_all
    if all_user: 
        #Si all_user tiene algo devuelve un json con cada usuario en forma de diccionario
        return jsonify([user.serialize() for user in all_user]), 200
    #Si all_user esta vacio devuelve un error
    return jsonify({'message': 'No account created'}), 500

#Get user by ID
@api.route('/account/<int:id>', methods=['GET'])
@jwt_required()
def get_by_id(id):
    print(get_jwt_identity())
    if not id == get_jwt_identity():
        return jsonify({'message': 'not authorized'}), 301
        
    user = Account.get_by_id(id)
    if not (user):
        return jsonify({'msg': 'Account not found'}),404
    return jsonify(user.serialize()),200           


#ELIMINAR CUENTA
@api.route('/account/<int:id>', methods = ['DELETE'])
@jwt_required()
def delete_account(id):
    if not id == get_jwt_identity():
        return jsonify({'message': 'not authorized'}), 301

    user = Account.get_by_id(id)
    if user:
        user.disable_user()
        return jsonify({'message': 'user deleted'}, user.serialize())
    return jsonify({'message': 'user not found'}), 404


#2-Recibir toda la lista de clientes
@api.route('/client', methods=['GET'])
def get_client():
    all_clients = Client.get_all()
    if all_clients:
        return jsonify([client.serialize() for client in all_clients]), 200
    return jsonify({'message': 'No account created'}), 500
    
#2.1-Cliente por ID
@api.route('/client/<int:id>', methods =['GET'])
def get_client_by_id(id):
    client = Client.get_by_id(id)
    if client:
        return jsonify(client.serialize()), 200
    return jsonify({'message':'Client not found'}), 404
    #return jsonify({'message': 'No clients created'}), 500

#3-Recibir toda la lista de business
@api.route('/business', methods=['GET'])
def get_business():
    all_businesses = Business.get_all()
    if all_businesses:
        return jsonify([business.to_dict() for business in all_businesses]), 200
    return jsonify({'message': 'No business created'}), 500

#3.1-Business por ID
@api.route('/business/<int:id>', methods =['GET'])
def get_business_by_id(id):
    print('hell@@@@@@@@@@@@@@@@@')
    business = Business.get_business_id(id)
    if business:
        return jsonify(business.to_dict()), 200
    return jsonify({'message':'Business not found'}), 404

#4-Crear un usuario Business/Client según el booleano is_client:
@api.route('/register', methods=['POST'])
def create_account():
    is_client = request.json.get('is_client', None)
    email = request.json.get('email', None)
    _password = request.json.get('_password', None)
    phone = request.json.get('phone', None)
    name = request.json.get('name', None)
    last_name = request.json.get('last_name', None)
    province = request.json.get('province', None)
    post_code = request.json.get('post_code', None)
    adress = request.json.get('adress', None)
    profile_foto = request.json.get('profile_photo', None)
    _is_active = request.json.get('_is_active', None)

    user = Account(
        is_client=is_client,
        email=email,
        _password = generate_password_hash(_password, method='pbkdf2:sha256', salt_length=16),
        phone=phone,
        name=name,
        last_name=last_name,
        province=province,
        post_code=post_code,
        adress=adress,
        profile_foto=profile_foto,
        _is_active=True
    )
  
    try:
        user.create()
        #return jsonify(user.serialize()), 201
    except exc.IntegrityError:
        return {'error': 'Something is wrong'}, 409
    
    if user:
        if (user.is_client==True):
            client=Client(account_id=user.id)
            try:
                client.create()
                access_token = create_access_token(identity=user.id, expires_delta=timedelta(minutes=120))
                return jsonify(client.serialize(), access_token), 201

            except exc.IntegrityError:
                return {'error': 'Something is wrong'}, 409
        else:
            centre_name = request.json.get('centre_name', None)
            cif = request.json.get('cif', None)
            schedule = request.json.get('schedule', None) 
            business=Business(
                account_id=user.id,
                centre_name=centre_name,
                cif=cif,
                schedule=schedule
            )
            try:
                business.create()
                access_token = create_access_token(identity=user.id, expires_delta=timedelta(minutes=120))
                return jsonify(business.to_dict(), access_token), 201
            except exc.IntegrityError:
                return {'error': 'Something is wrong'}, 409

@api.route('/services', methods=['GET'])
def get_service():
    service_result = Services.get_all()
    if service_result:
        return jsonify([service.serialize() for service in service_result]), 200
    return {'oh my god': 'Something is terribly wrong'}, 409    

#Get buservices ALL them mothethef*****
@api.route('/buservices', methods=['GET'])
def get_buservice():
    buservice_result = Buservices.get_all()
    if buservice_result:
        return jsonify([buservice.serialize() for buservice in buservice_result]), 200
    return {'almitghty Thor!': 'Raise us from perdition'}, 409

#Get buservices ONLY ONE OF 'EM mothethef*****
@api.route('/buservices/<int:id>', methods=['GET'])
def get_by_id_buservices(id):
    print('hello')
    buservices_variable = Buservices.get_by_id_buservices(id)
    print(buservices_variable)
    if not (buservices_variable):
        return jsonify({'there is hope': 'even if you are not reading what you expected. Know that this means that you did the back-end correctly, and you might find peace in that, at last.'}), 404
    return jsonify(buservices_variable.serialize()), 200

@api.route('/business/<int:id>/services', methods=['POST'])
@jwt_required()
def post_service(id):
    print('token', get_jwt_identity())
    if not id == get_jwt_identity():
        return {'error':'T_T'}, 401

    business_id = id
    title_bus = request.json.get('title_bus', None)
    phone = request.json.get('phone', None)
    email = request.json.get('email', None)
    professional_name = request.json.get('professional_name', None)
    professional_studies = request.json.get('professional_studies', None)
    professional_techniques = request.json.get('professional_techniques', None)
    offer = request.json.get('offer', None)
    adress = request.json.get('adress', None)
    specialty = request.json.get('specialty', None)
    numero_colegiado = request.json.get('numero_colegiado', None)
    description = request.json.get('description', None)
    tecniques = request.json.get('tecniques', None)
    photos = request.json.get('photos', None)

    # '''get service by title (specialty)'''
    service_result = Services.get_by_title(specialty)
    print(service_result)
    if service_result.title:
        buservice_variable = Buservices(
            business_id=business_id,
            services_id=service_result.id,
            title_bus=title_bus,
            offer=offer,
            phone=phone,
            email=email,
            professional_techniques=professional_techniques,
            professional_studies=professional_studies,
            professional_name=professional_name,
            adress=adress,
            specialty=specialty,
            numero_colegiado=numero_colegiado,
            description=description,
            tecniques=tecniques,
            photos=photos
        )

    if buservice_variable:
        try:
            print('hi', buservice_variable.serialize())
            buservice_variable.create()
           
            return jsonify(buservice_variable.serialize()), 201
        except exc.IntegrityError:
            return {'wake up': 'this is not a dream, this is a reality, there is no going back, there is no going home'}, 409

#Get user by EMAIL
@api.route('/account/<email>', methods=['GET'])
def get_by_email(email):
    user = Account.get_by_email(email)
    if not (user):
        return jsonify({'msg': 'Account not found, please check your email or Sign Up'}), 404
    return jsonify(user.serialize()),200    

@api.route('/reviews', methods=['GET'])
def get_reviews():
    reviews_result = Reviews.get_all()
    if reviews_result:
        return jsonify([baby_review.serialize() for baby_review in reviews_result]), 200
    return {'dang it!': 'In the kingswood, there lived a mother and her cub, she loved him very much. But there were all sort of things living in the woods, evil things... like stags and wolves... you could hear them howling in the night, and the cub was frightened, but his mother said: God only knows what went wrong, but you must not lose faith little lion, for one day all the beast will bow to you, and rest a crown upon your head. You will be king. You will be strong and fierce, just like your father.'}, 409

@api.route('/reviews', methods=['POST'])
def post_reviews():
    review = request.json.get('review', None)

    review_variable = Reviews(
        review=review
    )

    try:
        review_variable.create()
        return jsonify(review_variable.serialize()), 201
    except exc.IntegrityError:
        return {'I will be singing the song again': 'Even if it gives me nightmares, again: I will sing with no end'}, 409

#LOGIN + JWT TOKEN
@api.route('/login', methods=['POST'])
def login():
    print('llega??')
    email = request.json.get('email', None)
    password = request.json.get('password', None)
    if not (email and password):
        return {'error': 'Missing information'}, 401 #BadRequest
    user = Account.get_by_email(email)
    if user and check_password_hash(user._password, password) and user._is_active:
        access_token = create_access_token(identity=user.id, expires_delta=timedelta(minutes=120))
        return {'token': access_token}, 200
    return {'error': 'Some parameter is wrong'}, 400

'''@api.route('/account/<int:id>', methods = ['DELETE'])
def delete_users(id):
    user = Account.get_by_id(id)

    if user:
        user.delete()
        return jsonify(user.serialize(),{'msg':'Account deleted'}), 200

    return jsonify({'msg' : 'Account not foud'}), 404'''


#MOSTRAR TIPOS DE SERVICIOS
@api.route('/services', methods = ['GET'])
def get_services():
    all_services = Services.get_all()
    if all_services:
        return jsonify ([services.serialize() for services in all_services])
    return jsonify ({'message': 'No services created'}), 500

#CREAR TIPOS DE SERVICIOS
@api.route('/services', methods = ['POST'])
def create_service():
    title = request.json.get('title', None)
    service = Services(
        title = title
    )
    try:
        service.create()
        return jsonify(service.serialize()), 201
    except exc.IntegrityError:
        return {'error': 'Something is wrong'}, 409
    return {'error': 'User or password are incorrect'}, 400

#Get user by ID using login
@api.route('/client-login/<int:id>', methods=['GET'])
@jwt_required()
def get_user_ID(id):
    client = Client.get_by_id(id)
    if not client:
        return {'error': 'User doesnt exits'},400
    return jsonify(client.to_dict()), 200

#Modify user by ID
@api.route('/client/<int:id>', methods=['PATCH'])
@jwt_required()
def update_user(id):
    print ('helloooooooo')
    client = get_jwt_identity()
    print (id, client)
    if client != id:
        return {'error': 'Invalid action'}, 400

    update_user = {
        'email': request.json.get('email', None),
        '_password': request.json.get("password", None),
        'phone': request.json.get('phone', None),
        'name': request.json.get('name', None),
        'last_name': request.json.get('last_name', None),
        'province': request.json.get('province', None),
        'post_code': request.json.get('post_code', None),
        'address': request.json.get('address', None),
        
        'profile_foto': request.json.get('profile_foto', None),

    }
    if update_user["_password"]:
        password = generate_password_hash(
            update_user["_password"], method='pbkdf2:sha256', salt_length=16),
        update_user["_password"] = password
    
    user = Account.get_by_id(id)

    if user:
        updated_user = user.update(**{
            key: value for key, value in update_user.items()
            if value is not None
        })

        return jsonify(updated_user.serialize()), 200
    return {'error': 'User not found'}, 400


