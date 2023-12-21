-- Insert sample records into biological_sample_data
\c sample_db;

INSERT INTO biological_sample_storage_locations 
(location_name, location_street_address, location_city, location_state, location_zip, location_country_code)
VALUES
('BioStorage Lab 1', '1234 Science Blvd', 'Austin', 'TX', '73301', 'USA'),
('Genetic Haven 2', '5678 DNA Ave', 'San Francisco', 'CA', '94103', 'USA'),
('Sample Storage 3', '9101 Genetic Rd', 'Boston', 'MA', '02115', 'USA'),
('LifeBank Facility 4', '2345 Cell Way', 'Seattle', 'WA', '98101', 'USA'),
('BioPreserve 5', '6789 Molecule St', 'Chicago', 'IL', '60604', 'USA'),
('GenLab Storage 6', '1357 Helix Dr', 'San Diego', 'CA', '92101', 'USA'),
('Sample Safehouse 7', '2468 Chromosome Ct', 'Orlando', 'FL', '32801', 'USA'),
('Cellular Vault 8', '3690 Genome Ln', 'Denver', 'CO', '80203', 'USA'),
('Gene Guard 9', '4812 RNA Ave', 'Atlanta', 'GA', '30301', 'USA'),
('BioRepository 10', '7531 Nucleus Blvd', 'Houston', 'TX', '77002', 'USA');


INSERT INTO biological_sample_data (sample_id, sample_name, date_collected, experiment_type, storage_location_id)
VALUES
('s1', 'Sample 1', '2023-01-01', 'Type A', 3),
('s2', 'Sample 2', '2023-02-02', 'Type B', 5),
('s3', 'Sample 3', '2023-01-03', 'Type C', 7),
('s4', 'Sample 4', '2023-03-02', 'Type A', 3),
('s5', 'Sample 5', '2023-05-05', 'Type B', 1),
('s6', 'Sample 6', '2023-07-01', 'Type C', 9),
('s7', 'Sample 7', '2023-08-07', 'Type A', 1),
('s8', 'Sample 8', '2023-11-08', 'Type B', 3),
('s9', 'Sample 9', '2023-06-03', 'Type C', 4),
('s10', 'Sample 10', '2023-01-05', 'Type A', 5); 