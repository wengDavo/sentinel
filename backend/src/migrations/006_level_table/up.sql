CREATE TYPE LEVEL_NAME AS ENUM ('100 LEVEL', '200 LEVEL', '300 LEVEL', '400 LEVEL', '500 LEVEL', '600 LEVEL');

CREATE TABLE IF NOT EXISTS level (
    level_id SERIAL PRIMARY KEY,
    level_name LEVEL_NAME NOT NULL
);
