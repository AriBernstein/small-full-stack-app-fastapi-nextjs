-- Create the database if it does not exist
CREATE DATABASE sample_db;

-- Connect to the database
\c sample_db;

-- Create the table if it does not exist
CREATE TABLE IF NOT EXISTS biological_sample_data (
    Sample_ID SERIAL PRIMARY KEY,
    Sample_Name VARCHAR(255) NOT NULL,
    Date_Collected DATE NOT NULL,
    Experiment_Type VARCHAR(255) NOT NULL,
    Storage_Location VARCHAR(255) NOT NULL
);