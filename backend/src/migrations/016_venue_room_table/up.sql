CREATE TABLE IF NOT EXISTS venue_room (
    venue_room_id SERIAL PRIMARY KEY,
    venue_id INTEGER NOT NULL REFERENCES venue (venue_id) ON DELETE CASCADE ON UPDATE CASCADE,
    venue_type_id INTEGER NOT NULL REFERENCES venue_type (venue_type_id) ON DELETE SET NULL ON UPDATE CASCADE,
    room_name VARCHAR(255) NOT NULL,
    capacity INTEGER NOT NULL CHECK (capacity > 0)
);
