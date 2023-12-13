#!/usr/bin/env python3
import datetime
from pydantic import BaseModel

class BiologicalSampleIn(BaseModel):
    id: int
    sample_id: str
    sample_name: str
    date_collected: datetime.date
    experiment_type: str
    storage_location_id: int


class BiologicalSample(BaseModel):
    sample_id: str
    sample_name: str
    date_collected: datetime.date
    experiment_type: str
    storage_location_id: int


class BiologicalSampleStorageLocationIn(BaseModel):
    id: int
    location_name: str
    location_street_address: str
    location_city: str
    location_state: str
    location_zip: str
    location_country_code: str


class BiologicalSampleStorageLocation(BaseModel):
    location_name: str
    location_street_address: str
    location_city: str
    location_state: str
    location_zip: str
    location_country_code: str
