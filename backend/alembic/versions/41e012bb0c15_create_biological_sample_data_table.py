"""create biological_sample_data table

Revision ID: 41e012bb0c15
Revises: 
Create Date: 2023-12-18 17:06:25.937324

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '41e012bb0c15'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.create_table(
        "biological_sample_data",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("sample_id", sa.String, nullable=False, unique=True),
        sa.Column("sample_name", sa.String, nullable=False, unique=True),
        sa.Column("date_collected", sa.Date, nullable=False),
        sa.Column("experiment_type", sa.String, nullable=False),
        sa.Column("storage_location_id", sa.Integer, nullable=False),
    )

def downgrade():
    op.drop_table("biological_sample_data")



def downgrade() -> None:
    pass
