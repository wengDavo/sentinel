CREATE TYPE ROLE AS ENUM ('guest', 'manager', 'admin');

CREATE TABLE IF NOT EXISTS user_role (
    user_role_id SERIAL PRIMARY KEY,
	name ROLE NOT NULL
);
