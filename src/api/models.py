from flask_sqlalchemy import SQLAlchemy
import os
import sys
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import VARCHAR
from sqlalchemy.orm import relationship
from sqlalchemy import Column, ForeignKey, Integer, String, Enum, Boolean, Table

db = SQLAlchemy()

comments = Table("comments", db.Model.metadata,
    Column("reviews_id", ForeignKey("reviews.id"), primary_key=True),
    Column("client_id", ForeignKey("client.id"), primary_key=True)
)

class Buservices(db.Model):
    __tablename__ = 'buservices'
    business_id = db.Column(ForeignKey('business.id'), primary_key=True)
    services_id = db.Column(ForeignKey('services.id'), primary_key=True)
    extra_data = Column(String(50))
    #data
    title = db.Column(db.VARCHAR, nullable=False, unique=False)
    offer = db.Column(db.Boolean(True), nullable=False)
    adress = db.Column(db.VARCHAR, nullable=False)
    specialty = db.Column(db.VARCHAR, nullable=False)
    numero_colegiado = db.Column(db.VARCHAR, nullable=False, unique=False)
    description = db.Column(db.VARCHAR, nullable=False, unique=False)
    tecniques = db.Column(db.VARCHAR, nullable=True, unique=False)
    photos = db.Column(db.VARCHAR, nullable=True, unique=False)
    #Relationship
    services = db.relationship("Services", back_populates="business_")
    business = db.relationship("Business", back_populates="services_")

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
    is_client = db.Column(db.Boolean(True), unique=False, nullable=False)
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
            "profile_photo": self.profile_foto
        }
    
    def create(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_all(cls):
        users_list = cls.query.all()
        return [user.serialize() for user in users_list]

class Client(db.Model):
    __tablename__ = 'client'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    #FK
    account_id = db.Column(Integer, ForeignKey('account.id'))
    #Relationships
    favourites = db.relationship("Favourites", uselist=False, backref="client")
    reviews = db.relationship("Reviews", secondary=comments, back_populates="client")
    #2
    def __repr__(self):
        return f'Client {self.id}'
   #3
    def serialize(self):
        return {
            "id": self.id,
        }
        
class Favourites(db.Model):
    __tablename__ = 'favourites'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    #FK
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'))
    #2
    def __repr__(self):
        return f'Favourites {self.id}'
        
    def serialize(self):
        return {
            "id": self.id,
        }

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
    services_ = relationship("Buservices", back_populates="business")
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

class Services(db.Model):
    __tablename__ = 'services'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    #relation
    business_ = relationship("Buservices", back_populates="services")

    def __repr__(self):
        return f'Services {self.title}'
        
    def serialize(self):
        return {
            "id": self.id,
            #aquí no ponemos la password porque no queremos que se vea en el front
        }


class Reviews(db.Model):
    __tablename__ = 'reviews'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.VARCHAR, nullable=False, unique=False)
    comment = db.Column(db.VARCHAR, nullable=False, unique=False)
    #Relationships
    client = db.relationship("Client", secondary=comments, back_populates="reviews")

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
