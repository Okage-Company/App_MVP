from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import VARCHAR
from sqlalchemy.orm import relationship
from sqlalchemy import Column, ForeignKey, Integer, String, Enum, Boolean, Table

db = SQLAlchemy()


#Tabla intermedia entre cliente y buservices
favourites = Table("favourites", db.Model.metadata,
    Column("client_id", ForeignKey("client.id"), primary_key=True),
    Column("buservices_id", ForeignKey("buservices.id"), primary_key=True)
)

class Comments(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.VARCHAR, nullable=False)
    client_id = db.Column(ForeignKey('client.id'))
    reviews_id = db.Column(ForeignKey('reviews.id'))
    #Relationship
    client = db.relationship("Client")
    reviews = db.relationship("Reviews")

#Tabla intermedia entre Business y Services
class Buservices(db.Model):
    __tablename__ = 'buservices'
    id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(ForeignKey('business.id'), nullable=False)
    services_id = db.Column(ForeignKey('services.id'), nullable=False)
    #data
    offer = db.Column(db.Boolean, default=True, nullable=False)
    adress = db.Column(db.VARCHAR, nullable=False)
    specialty = db.Column(db.VARCHAR, nullable=False)
    numero_colegiado = db.Column(db.VARCHAR, nullable=False, unique=False)
    description = db.Column(db.VARCHAR, nullable=False, unique=False)
    tecniques = db.Column(db.VARCHAR, nullable=True, unique=False)
    photos = db.Column(db.VARCHAR, nullable=True, unique=False)
    #Relationship
    services = db.relationship("Services")
    business = db.relationship("Business")
    client_ = db.relationship("Client",
                    secondary=favourites,
                    backref="buservices")


    def __repr__(self):
        return f'Buservices {self.title}, {self.specialty}, {self.numero_colegiado}'

    def serialize(self):
        return {
            "title": self.title,
            "offer": self.offer,
            "adress" : self.adress,
            "specialty": self.specialty,
            "numero_colegiado": self.numero_colegiado,
            "description": self.description,
            "tecniques": self.tecniques,
            "photos": self.photos,
        }

#1.1-Declaro el nombre de la primera tabla
class Account(db.Model):
    __tablename__ = 'account'
    #1.2-Declaro el título de cada columna
    id = db.Column(db.Integer, primary_key=True)
    #Relationships
    clients = db.relationship('Client', uselist=False, backref="account")
    businesses = db.relationship('Business', uselist=False, backref="account")
    #datos
    is_client = db.Column(db.Boolean, default=True, unique=False, nullable=False)
    email = db.Column(db.VARCHAR, unique=True, nullable=False)
    _password = db.Column(db.VARCHAR, unique=False, nullable=False)
    phone = db.Column(db.VARCHAR, unique=False, nullable=True)
    name = db.Column(db.VARCHAR, unique=False, nullable=False)
    last_name = db.Column(db.VARCHAR, unique=False, nullable = True)
    province = db.Column(db.VARCHAR, unique=False, nullable=False)
    post_code = db.Column(db.VARCHAR, unique=False, nullable=False)
    adress = db.Column(db.VARCHAR, unique=False, nullable=True)
    profile_foto = db.Column(db.VARCHAR, unique=False, nullable=True)
    _is_active = db.Column(db.Boolean, default=True, unique=False, nullable=False)
    #las relaciones se nombran con el verbo en inifinitvo

    #2(__repr__)Esto sirve para que python pueda print por e-mail+id sin bugs ni problemas,
    def __repr__(self):
        return f'Account {self.email}, {self.id}, {self.account_type}'
    #3(Serialize)-Transforma en formato json la base de datos, 
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "phone": self.phone,
            "name": self.name,
            "last_name": self.last_name,
            "province": self.province,
            "post_code": self.post_code,
            "adress": self.adress,
            "profile_photo": self.profile_foto,
            "_is_active": self._is_active
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
    
    @classmethod
    def get_by_id(cls, id):
        user = cls.query.get(id)
        return user

    @classmethod
    def get_by_email(cls, email):
        account = cls.query.filter_by(email=email).one_or_none()
        return account

    @classmethod
    def get_all(cls):
        users_list = cls.query.all()
        return users_list

    @classmethod
    def disable_user(cls, id):
        user_disabled = get_by_id(account, id)
        user_disabled._is_active = False
        db.session.commit()
        return user_disabled

    

class Client(db.Model):
    __tablename__ = 'client'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    #FK
    account_id = db.Column(Integer, ForeignKey('account.id'))
    #Relationships
    reviews_ = db.relationship("Comments", back_populates="client")
    buservices_ = db.relationship("Buservices",
                    secondary=favourites,
                    backref="client")
    #2
    def __repr__(self):
        return f'Client {self.id} {self.account_id}'
   #3
    def serialize(self):
        client = Account.get_by_id(self.account_id)
        return {
            "id": self.id,
            "account_id": self.account_id,
        }

    def create(self):
        db.session.add(self)
        db.session.commit()
    
    @classmethod
    def get_all(cls):
        client_list = cls.query.all()
        return client_list
        

class Business(db.Model):
    __tablename__ = 'business'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    #FK
    account_id = db.Column(Integer, ForeignKey('account.id'))
    #data
    centre_name = db.Column(db.VARCHAR, unique=False, nullable=False)
    cif = db.Column(db.VARCHAR, unique=False, nullable=False)
    #Poner la jornada partida
    schedule = db.Column(db.VARCHAR, unique=False, nullable=False)
    #Relationships
    services_ = db.relationship("Buservices", back_populates="business")
    #2
    def __repr__(self):
        return f'Business {self.id}'
        
    #3
    def serialize(self):
        return {
            "id": self.id,
            "account_id": self.account_id,
            "centre_name": self.centre_name,
            "cif" : self.cif,
            "schedule": self.schedule
            #aquí no ponemos la password porque no queremos que se vea en el front
        }

    def create(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_all(cls):
        business_list = cls.query.all()
        return business_list

class Services(db.Model):
    __tablename__ = 'services'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    #Data
    title = db.Column(db.VARCHAR, nullable=False, unique=False)
    #relation
    business_ = db.relationship("Buservices", back_populates="services")

    def __repr__(self):
        return f'Services {self.title}'
        
    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            #aquí no ponemos la password porque no queremos que se vea en el front
        }

    @classmethod
    def get_all(cls):
        services_list = cls.query.all()
        return services_list


    def create(self):
        db.session.add(self)
        db.session.commit()



class Reviews(db.Model):
    __tablename__ = 'reviews'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    #Data
    review = db.Column(db.VARCHAR, nullable=False, unique=False)
    #Relationships
    client_ = db.relationship("Comments", back_populates="reviews")

    #FK
    #2
    def __repr__(self):
        return f'Reviews {self.id}'
        
    def serialize(self):
        return {
            "id": self.id,
            "review": self.review,
            #aquí no ponemos la password porque no queremos que se vea en el front
        }
