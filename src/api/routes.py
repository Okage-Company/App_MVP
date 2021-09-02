"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import timedelta

from flask import Flask, request, jsonify, url_for, Blueprint
#Herramienta para las promesas
from flask_cors import CORS
from sqlalchemy import exc
from werkzeug.security import check_password_hash
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

#2-Crear un usuario Business/Client según el booleano is_client:
@api.route('/account', methods=['POST'])
def create_client():
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
        _password=_password,
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
                return jsonify(client.serialize()), 201
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
                return jsonify(business.serialize()), 201
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

@api.route('/buservices', methods=['GET'])
def get_buservice():
    buservice_result = Buservices.get_all()
    if buservice_result:
        return jsonify([buservice.serialize() for buservice in buservice_result]), 200
    return {'almitghty Thor!': 'Raise us from perdition'}, 409

@api.route('/buservices', methods=['POST'])
def post_buservice():
    offer = request.json.get('offer', None)
    adress = request.json.get('adress', None)
    specialty = request.json.get('specialty', None)
    numero_colegiado = request.json.get('numero_colegiado', None)
    description = request.json.get('description', None)
    tecniques = request.json.get('tecniques', None)
    photos = request.json.get('photos', None)

    buservice_variable = Buservices(
        offer=offer,
        adress=adress,
        specialty=specialty,
        numero_colegiado=numero_colegiado,
        description=description,
        tecniques=tecniques,
        photos=photos
    )

    service_variable = Services()
    business_variable = Business()

    if buservice_variable:
        relation_service = Buservices(services_id=business_variable.id)
        relation_business = Buservices(business_id=service_variable.id)

    try:
        buservice_variable.create()
        return jsonify(buservice_variable.serialize()), 201
    except exc.IntegrityError:
        return {'wake up': 'this is not a dream, this is a reality, there is no going back, there is no going home'}, 409

@api.route('/reviews', methods=['GET'])
def get_reviews():
    reviews_result = Reviews.get_all()
    if reviews_result:
        return jsonify([baby_review.serialize() for baby_review in reviews_result]), 200
    return {'dang it!': 'In the kingswood, there lived a mother and her cub, she loved him very much. But there were all sort of things living in the woods, evil things... like stags and wolves... you could hear them howling in the night, and the cub was frightened, but his mother said: God only knows what went wrong, but you must not lose faith little lion, for one day all the beast will bow to you, and rest a crown upon your head. You will be king. You will be strong and fierce, just like your father.'}, 409

#LOGIN + JWT TOKEN
@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not (email and password):
        return {'error': 'Missing information'}, 401 #BadRequest
    user = Account.get_by_email(email)

    if user:
        access_token = create_access_token(identity=user.id, expires_delta=timedelta(minutes=120))
        return {'token': access_token}, 200
    return {'error': 'Some parameter is wrong'}, 400