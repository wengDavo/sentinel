CREATE TABLE IF NOT EXISTS lecturer (
    lecturer_id SERIAL PRIMARY KEY,
    users_id INTEGER NOT NULL REFERENCES users (users_id) ON DELETE CASCADE ON UPDATE CASCADE,
    department_id INTEGER REFERENCES department (department_id) ON DELETE SET NULL ON UPDATE CASCADE,
    availability VARCHAR(255) NOT NULL
);
