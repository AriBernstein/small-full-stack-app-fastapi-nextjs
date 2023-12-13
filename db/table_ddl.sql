\c sample_db;

CREATE TABLE IF NOT EXISTS biological_sample_data (
    id SERIAL PRIMARY KEY,
    sample_id VARCHAR(255) NOT NULL,
    sample_name VARCHAR(255) NOT NULL,
    date_collected DATE NOT NULL,
    experiment_type VARCHAR(255) NOT NULL,
    storage_location_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS biological_sample_storage_locations (
    id SERIAL PRIMARY KEY,
    location_name VARCHAR(255) NOT NULL,
    location_street_address VARCHAR(255) NOT NULL,
    location_city VARCHAR(255) NOT NULL,
    location_state VARCHAR(2),
    location_zip VARCHAR(10),
    location_country_code VARCHAR(3)
);
