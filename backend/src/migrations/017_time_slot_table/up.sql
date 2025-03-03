CREATE TABLE IF NOT EXISTS time_slot (
    time_slot_id SERIAL PRIMARY KEY,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    CONSTRAINT check_time_range CHECK (end_time > start_time)
);
