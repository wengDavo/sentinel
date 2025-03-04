CREATE TABLE IF NOT EXISTS users (
    users_id SERIAL PRIMARY KEY,
    user_role_id INTEGER REFERENCES user_role (user_role_id) ON DELETE SET NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
