CREATE TABLE IF NOT EXISTS venue_type (
    venue_type_id SERIAL PRIMARY KEY,
    venue_type_name VARCHAR(255) NOT NULL UNIQUE
);
