-- Insert sample records into biological_sample_data
\c sample_db;

INSERT INTO biological_sample_data (sample_name, date_collected, experiment_type, storage_location)
VALUES
('Sample 1', '2023-01-01', 'Type A', 'Location 1'),
('Sample 2', '2023-01-02', 'Type B', 'Location 2'),
('Sample 3', '2023-01-03', 'Type C', 'Location 1'),
('Sample 4', '2023-01-02', 'Type A', 'Location 3'),
('Sample 5', '2023-01-05', 'Type B', 'Location 2'),
('Sample 6', '2023-01-01', 'Type C', 'Location 4'),
('Sample 7', '2023-01-07', 'Type A', 'Location 1'),
('Sample 8', '2023-01-08', 'Type B', 'Location 5'),
('Sample 9', '2023-01-03', 'Type C', 'Location 3'),
('Sample 10', '2023-01-05', 'Type A', 'Location 2'); 