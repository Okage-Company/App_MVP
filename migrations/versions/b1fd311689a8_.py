"""empty message

Revision ID: b1fd311689a8
Revises: 1f84095e5f82
Create Date: 2021-08-24 16:02:24.723671

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b1fd311689a8'
down_revision = '1f84095e5f82'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('comments', sa.Column('reviews_id', sa.Integer(), nullable=False))
    op.alter_column('comments', 'client_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.create_foreign_key(None, 'comments', 'reviews', ['reviews_id'], ['id'])
    op.drop_column('comments', 'id')
    op.drop_column('comments', 'comment')
    op.add_column('reviews', sa.Column('comment', sa.VARCHAR(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('reviews', 'comment')
    op.add_column('comments', sa.Column('comment', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.add_column('comments', sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False))
    op.drop_constraint(None, 'comments', type_='foreignkey')
    op.alter_column('comments', 'client_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.drop_column('comments', 'reviews_id')
    # ### end Alembic commands ###
