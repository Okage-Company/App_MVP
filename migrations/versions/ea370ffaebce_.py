"""empty message

Revision ID: ea370ffaebce
Revises: 
Create Date: 2021-08-24 08:06:23.551993

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ea370ffaebce'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('account',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('account_type', sa.Boolean(create_constraint=True), nullable=False),
    sa.Column('email', sa.VARCHAR(), nullable=False),
    sa.Column('_password', sa.VARCHAR(), nullable=False),
    sa.Column('phone', sa.VARCHAR(), nullable=True),
    sa.Column('name', sa.VARCHAR(), nullable=False),
    sa.Column('last_name', sa.VARCHAR(), nullable=True),
    sa.Column('province', sa.VARCHAR(), nullable=False),
    sa.Column('post_code', sa.VARCHAR(), nullable=False),
    sa.Column('adress', sa.VARCHAR(), nullable=True),
    sa.Column('profile_foto', sa.VARCHAR(), nullable=True),
    sa.Column('_is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.VARCHAR(), nullable=False),
    sa.Column('offer', sa.Boolean(create_constraint=True), nullable=False),
    sa.Column('adress', sa.VARCHAR(), nullable=False),
    sa.Column('specialty', sa.VARCHAR(), nullable=False),
    sa.Column('numero_colegiado', sa.VARCHAR(), nullable=False),
    sa.Column('description', sa.VARCHAR(), nullable=False),
    sa.Column('tecniques', sa.VARCHAR(), nullable=True),
    sa.Column('photos', sa.VARCHAR(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('business',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('account_id', sa.Integer(), nullable=True),
    sa.Column('centre_name', sa.VARCHAR(), nullable=False),
    sa.Column('cif', sa.VARCHAR(), nullable=False),
    sa.Column('schedule', sa.VARCHAR(), nullable=False),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('client',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('account_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['account_id'], ['account.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('favourites',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('client_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['client_id'], ['account.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('services_id', sa.Integer(), nullable=True),
    sa.Column('review', sa.VARCHAR(), nullable=False),
    sa.ForeignKeyConstraint(['services_id'], ['services.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('business_services',
    sa.Column('business_id', sa.Integer(), nullable=False),
    sa.Column('service_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['business_id'], ['business.id'], ),
    sa.ForeignKeyConstraint(['service_id'], ['services.id'], ),
    sa.PrimaryKeyConstraint('business_id', 'service_id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('client_id', sa.Integer(), nullable=True),
    sa.Column('reviews_id', sa.Integer(), nullable=True),
    sa.Column('comment', sa.VARCHAR(), nullable=False),
    sa.ForeignKeyConstraint(['client_id'], ['client.id'], ),
    sa.ForeignKeyConstraint(['reviews_id'], ['reviews.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    op.drop_table('business_services')
    op.drop_table('reviews')
    op.drop_table('favourites')
    op.drop_table('client')
    op.drop_table('business')
    op.drop_table('services')
    op.drop_table('account')
    # ### end Alembic commands ###
