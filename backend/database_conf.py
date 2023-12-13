#!/usr/bin/env python3

from contextlib import asynccontextmanager
import os
import databases
from dotenv import load_dotenv
from fastapi import FastAPI
import sqlalchemy


load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
db = databases.Database(DATABASE_URL)
print("------------------")
print(DATABASE_URL)
engine = sqlalchemy.create_engine(DATABASE_URL)

@asynccontextmanager
async def lifespan(app: FastAPI):
    await db.connect()
    yield
    await db.disconnect()