"""empty message

Revision ID: 8724adb6ec17
Revises: 98c93c933fde
Create Date: 2021-08-22 13:24:23.145088

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8724adb6ec17'
down_revision = '98c93c933fde'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('services',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('offer', sa.Boolean(create_constraint=True), nullable=False),
    sa.Column('adress', sa.String(), nullable=False),
    sa.Column('specialty', sa.String(), nullable=False),
    sa.Column('numero_colegiado', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=False),
    sa.Column('tecniques', sa.String(), nullable=True),
    sa.Column('photos', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('services')
    # ### end Alembic commands ###