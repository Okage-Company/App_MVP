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

#Poner API delante
api = Blueprint('api', __name__)

#1-Recibir toda la lista de usuarios
@api.route('/account', methods=['GET'])
def get_user():
    all_user = Account.get_all()
    if all_user:
        return jsonify([user.serialize() for user in all_user]), 200
    return jsonify({'message': 'No account created'}), 500

#2-Recibir toda la lista de clientes
@api.route('/client', methods=['GET'])
def get_client():
    all_clients = Client.get_all()
    if all_clients:
        return jsonify([client.serialize() for client in all_clients]), 200
    return jsonify({'message': 'No account created'}), 500
    
    return jsonify({'message': 'No clients created'}), 500
#3-Recibir toda la lista de business
@api.route('/business', methods=['GET'])
def get_business():
    all_businesses = Business.get_all()
    if all_businesses:
        return jsonify([business.serialize() for business in all_businesses]), 200
    return jsonify({'message': 'No business created'}), 500

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
                access_token = create_access_token(identity=client.serialize(), expires_delta=timedelta(minutes=120))
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
                access_token = create_access_token(identity=business.serialize(), expires_delta=timedelta(minutes=120))
                return jsonify(business.serialize(), access_token), 201
            except exc.IntegrityError:
                return {'error': 'Something is wrong'}, 409
    else:
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

#Get business by ID
@api.route('/business/<int:id>', methods=['GET'])
def get_by_id(id):
    business_variable = Business.get_by_id_business(id)
    if not (business_variable):
        return jsonify({'what?': 'i did not find it but try again little dove'}),404
    return jsonify(business_variable.serialize()), 200

@api.route('/business/<int:id>/services', methods=['POST'])
@jwt_required()
def post_service(id):

    if not id == get_jwt_identity()['id']:
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
    
    if service_result:
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
            print(buservice_variable)
            buservice_variable.create()
            return jsonify(buservice_variable.serialize()), 201
        except exc.IntegrityError:
            return {'wake up': 'this is not a dream, this is a reality, there is no going back, there is no going home'}, 409
    return {'error':'there is not'}

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
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not (email and password):
        return {'error': 'Missing information'}, 401 #BadRequest
    user = Account.get_by_email(email)

    if user and check_password_hash(user._password, password) and user._is_active:
        access_token = create_access_token(identity=user.serialize(), expires_delta=timedelta(minutes=120))
        return {'token': access_token}, 200
    return {'error': 'User or password are incorrect'}, 400