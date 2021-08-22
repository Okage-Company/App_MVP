from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, ForeignKey, Integer, String, Enum, Boolean, Table

db = SQLAlchemy()


business_services = Table('business_services', db.Model.metadata,
    Column("business_id", Integer, ForeignKey("business.id"), primary_key=True),
    Column("service_id", Integer, ForeignKey("services.id"), primary_key=True)
)
#1.1-Declaro el nombre de la primera tabla
class Account(db.Model):
    __tablename__ = 'account'
    #1.2-Declaro el título de cada columna
    id = db.Column(db.Integer, primary_key=True)
    account_type = db.Column(db.Boolean(True), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phone = db.Column(db.String(20), unique=False, nullable=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    last_name = db.Column(db.String(30), unique=False, nullable = True)
    province = db.Column(db.String, unique=False, nullable=False)
    post_code = db.Column(db.String, unique=False, nullable=False)
    adress = db.Column(db.String, unique=False, nullable=True)
    profile_foto = db.Column(db.String, unique=False, nullable=True)
    _is_active = db.Column(db.Boolean(True), nullable=False)

    #2(__repr__)Esto sirve para que python pueda print por e-mail+id sin bugs ni problemas,
    def __repr__(self):
        return f'Account {self.email}, {self.id}'
    #3(Serialize)-Transforma en formato json la base de datos, 
    # como si fuera un diccionario, para que podamos coger la información en el Front. 
    # { "id": 1,
    #   "email": rubb.phz@gmail.com
    #   "pho...},
    #{  "id": 2,
    #    "email": adkfafasd@gmail.com
    #.   ....
    # }
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

class Client(db.Model):
    __tablename__ = 'client'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey('account.id'))
    #Relaciono 1 Cliente con muchos comentarios escribiendo la relationship aquí
    #y la ForeignKey en Comments.
    comments = db.relationship('Comments')
    #2
    def __repr__(self):
        return '<Client %r>' % self.account_id
   #3
    def serialize(self):
        return {
            "id": self.id,
            "account_id": self.account_id
        }

class Favourites(db.Model):
    __tablename__ = 'favourites'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('account.id'))
    business_services = db.relationship('business_services.id')
    #2
    def __repr__(self):
        return '<Favourites %r>' % self.id

class Business(db.Model):
    __tablename__ = 'business'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    account_id = db.Column(db.Integer, db.ForeignKey('account.id'))
    centre_name = db.Column(db.String, unique=False, nullable=False)
    cif = db.Column(db.String, unique=False, nullable=False)
    schedule = db.Column(db.String, unique=False, nullable=False)
    business = db.relationship("Services",
                            secondary=business_services,
                            back_populates="business")
    #2
    def __repr__(self):
        return '<Business %r>' % self.centre_name
    #3
    def serialize(self):
        return {
            "id": self.id,
            "account_id": self.account_id
            #aquí no ponemos la password porque no queremos que se vea en el front
        }

class Services(db.Model):
    __tablename__ = 'services'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False, unique=False)
    offer = db.Column(db.Boolean(True), nullable=False)
    adress = db.Column(db.String, nullable=False)
    specialty = db.Column(db.String, nullable=False)
    numero_colegiado = db.Column(db.String, nullable=False, unique=False)
    description = db.Column(db.String, nullable=False, unique=False)
    tecniques = db.Column(db.String, nullable=True, unique=False)
    photos = db.Column(db.String, nullable=True, unique=False)
    reviews = db.relationship('Reviews')
    services = db.relationship("Business",
                            secondary=business_services,
                            back_populates="services")

    def __repr__(self):
        return '<Services %r>' % self.title

class Reviews(db.Model):
    __tablename__ = 'reviews'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    services_id = db.Column(db.Integer, db.ForeignKey('services_id'))
    #comment_id = db.Column(db.Integer, db.ForeignKey('comments.id'))
    review = db.Column(db.String, nullable=False, unique=False)
    comments = db.relationship('Comments')
    #2
    def __repr__(self):
        return '<Reviews %r>' % self.id

class Comments(db.Model):
    __tablename__ = 'comments'
    #1.2
    id = db.Column(db.Integer, primary_key=True)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'))
    reviews_id = db.Column(db.Integer, db.ForeignKey('reviews.id'))
    comment = db.Column(db.String, nullable=False, unique=False)
    #2
    def __repr__(self):
        return '<Comments %r>' % self.id