"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from datetime import timedelta

from flask import Flask, request, jsonify, url_for, Blueprint
from sqlalchemy import exc
from werkzeug.security import check_password_hash

from api.models import db, Account, Client, Business, Favourites, Services, Reviews, Comments
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/account', methods=['GET, POST'])
def get_account():
    response_body = {
        "message": "Hello! I'm the account"
    }
    return jsonify(response_body), 200


@api.route('/business', methods=['GET'])
def get_business():

    response_body = {
        "message": "Hello! I'm the business"
    }
    return jsonify(response_body), 200