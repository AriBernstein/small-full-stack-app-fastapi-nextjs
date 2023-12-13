#!/usr/bin/env python3
import sqlalchemy

metadata = sqlalchemy.MetaData()

biological_sample_data = sqlalchemy.Table(
    "biological_sample_data",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("sample_id", sqlalchemy.String),
    sqlalchemy.Column("sample_name", sqlalchemy.String),
    sqlalchemy.Column("date_collected", sqlalchemy.types.DATE),
    sqlalchemy.Column("experiment_type", sqlalchemy.String),
    sqlalchemy.Column("storage_location_id", sqlalchemy.Integer),
)

biological_sample_storage_locations = sqlalchemy.Table(
    "biological_sample_storage_locations",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("location_name", sqlalchemy.String),
    sqlalchemy.Column("location_street_address", sqlalchemy.String),
    sqlalchemy.Column("location_city", sqlalchemy.String),
    sqlalchemy.Column("location_state", sqlalchemy.String),
    sqlalchemy.Column("location_zip", sqlalchemy.String),
    sqlalchemy.Column("location_country_code", sqlalchemy.String),
)