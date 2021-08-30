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

from api.models import db, Account, Client, Business, Services, Reviews
from api.utils import generate_sitemap, APIException

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
    

#Get user by ID
@api.route('/account/<int:id>', methods=['GET'])
def user_by_id(id):
    user = Account.read_by_id(id)
    if not (user):
        return jsonify({'msg': 'Account not found'}),404
    return jsonify(user.serialize()),200           

#Get user by EMAIL
@api.route('/account/<email>', methods=['GET'])
def user_by_email(email):
    user = Account.get_by_email(email)
    if not (user):
        return jsonify({'msg': 'Account not found, please check your email or Sign Up'}), 404
    return jsonify(user.serialize()),200    

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