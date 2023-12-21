#!/usr/bin/env python3

from typing import List
import datetime
from fastapi import APIRouter, HTTPException
import sqlalchemy

from database.model import biological_sample_data, biological_sample_storage_locations
from database.schemas import BiologicalSample, BiologicalSampleStorageLocation
from database_conf import db

router = APIRouter()

def validate_date(date_text: str):
    try:
        datetime.date.fromisoformat(date_text)
    except ValueError:
        raise ValueError("Incorrect data format, should be YYYY-MM-DD")


@router.get(
    "/bio_samples/",
    response_model=List[BiologicalSample],
    description="Get all biological samples in biological_sample_data",
)
async def get_all_samples():
    query = biological_sample_data.select()
    result = await db.fetch_all(query)

    if not result:
        raise HTTPException(status_code=404, detail="No biological samples found")

    return result


@router.get(
    "/bio_samples/date/{date}",
    response_model=List[BiologicalSample],
    description="Get all biological samples in biological_sample_data with date_collected equal to date",
)
async def get_samples_by_date(date: str):
    validate_date(date)
    return await get_samples_by_date_range(date, date)


@router.get(
    "/bio_samples/dates/{start_date}/{end_date}",
    response_model=List[BiologicalSample],
    description="Get all biological samples in biological_sample_data with date_collected between start_date and end_date",
)
async def get_samples_by_date_range(start_date: str, end_date: str):
    validate_date(start_date)
    validate_date(end_date)
    query = biological_sample_data.select(
        whereclause=sqlalchemy.text(
            f"'{start_date}' <= date_collected AND '{end_date}' >= date_collected"
        )
    )

    result = await db.fetch_all(query)

    if not result:
        raise HTTPException(status_code=404, detail="No records found for the specified date range")

    return result


@router.get(
    "/bio_sample/{sample_id}",
    response_model=BiologicalSample,
    description="Get biological sample in biological_sample_data with sample_id equal to sample_id",
)
async def get_sample_by_sample_id(sample_id: str):
    query = biological_sample_data.select().where(
        biological_sample_data.c.sample_id == sample_id
    )
    
    result = await db.fetch_one(query)

    if result is None:
        raise HTTPException(status_code=404, detail=f"No biological sample found with sample_id {sample_id}")

    return result


@router.get(
    "/bio_sample/{sample_name}",
    response_model=BiologicalSample,
    description="Get biological sample in biological_sample_data with sample_name equal to sample_name",
)
async def get_sample_by_sample_name(sample_name: str):
    query = biological_sample_data.select(
        whereclause=sqlalchemy.text(f"sample_name = {sample_name.strip()}")
    )
    result = await db.fetch_one(query)
    if result is None:
        raise HTTPException(status_code=404, detail=f"No biological sample found with sample_name {sample_name}")

    return result

@router.get("/sample_storage/{sample_id}", response_model=BiologicalSampleStorageLocation)
async def get_sample_storage_location(sample_id: str):
    join_query = sqlalchemy.select(
        [
            biological_sample_storage_locations.c.id,
            biological_sample_storage_locations.c.location_name,
            biological_sample_storage_locations.c.location_street_address,
            biological_sample_storage_locations.c.location_city,
            biological_sample_storage_locations.c.location_state,
            biological_sample_storage_locations.c.location_zip,
            biological_sample_storage_locations.c.location_country_code
        ]
    ).select_from(
        biological_sample_data.join(
            biological_sample_storage_locations,
            biological_sample_data.c.storage_location_id == biological_sample_storage_locations.c.id
        )
    ).where(
        biological_sample_data.c.sample_id == sample_id
    )

    result = await db.fetch_one(join_query)
    if result is None:
        raise HTTPException(status_code=404, detail="Sample not found")
    return result

@router.post(
    "/bio_sample/",
    response_model=BiologicalSample,
    description="Create a new biological sample in biological_sample_data",
)
async def create_sample(sample: BiologicalSample):
    try:
        query = biological_sample_data.insert().values(
            sample_id=sample.sample_id,
            sample_name=sample.sample_name,
            date_collected=sample.date_collected,
            experiment_type=sample.experiment_type,
            storage_location_id=sample.storage_location_id,
        )
        last_record_id = await db.execute(query)
        return {**sample.dict(), "id": last_record_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create biological sample: {str(e)}")



@router.put(
    "/bio_sample/{sample_id}",
    response_model=BiologicalSample,
    description="Update a biological sample in biological_sample_data with sample_id equal to sample_id",
)
async def update_sample_by_sample_id(sample_id: str, sample: BiologicalSample):
    try:
        record = await get_sample_by_sample_id(sample_id)
        if record is None:
            raise ValueError(f"Sample with sample_id {sample_id} does not exist")

        query = (
            biological_sample_data.update()
            .where(biological_sample_data.c.sample_id == sample_id)
            .values(
                sample_id=sample.sample_id,
                sample_name=sample.sample_name,
                date_collected=sample.date_collected,
                experiment_type=sample.experiment_type,
                storage_location_id=sample.storage_location_id,
            )
        )
        await db.execute(query)
        return {**sample.dict(), "id": sample_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to update biological sample: {str(e)}")


@router.delete(
    "/bio_sample/{sample_id}",
    description="Delete a biological sample in biological_sample_data with sample_id equal to sample_id",
)
async def delete_sample_by_sample_id(sample_id: str):
    try:
        query = biological_sample_data.delete().where(
            biological_sample_data.c.sample_id == sample_id
        )
        await db.execute(query)
        return {"message": f"Sample with sample_id {sample_id} deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete biological sample: {str(e)}")
