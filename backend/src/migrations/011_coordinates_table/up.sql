CREATE TABLE IF NOT EXISTS coordinates (
    coordinates_id SERIAL PRIMARY KEY,
    longitude DECIMAL(9,6) NOT NULL,
    latitude DECIMAL(9,6) NOT NULL
);
