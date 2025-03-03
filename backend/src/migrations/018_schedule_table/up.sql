CREATE TYPE schedule_mode AS ENUM ('online', 'offline');

CREATE TABLE IF NOT EXISTS schedule (
    schedule_id SERIAL PRIMARY KEY,
    course_id INTEGER NOT NULL REFERENCES course (course_id) ON DELETE CASCADE ON UPDATE CASCADE,
    venue_id INTEGER REFERENCES venue (venue_id) ON DELETE SET NULL ON UPDATE CASCADE,
    lecturer_id INTEGER NOT NULL REFERENCES lecturer (lecturer_id) ON DELETE CASCADE ON UPDATE CASCADE,
    time_slot_id INTEGER NOT NULL REFERENCES time_slot (time_slot_id) ON DELETE CASCADE ON UPDATE CASCADE,
    schedule_mode schedule_mode NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
