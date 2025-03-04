import { pool } from "../config/db.config.js";
import { logger } from "../config/logger.config.js";

export async function getUserByEmailModel(email) {
	try {
		const stmt = `SELECT * FROM users WHERE email = $1`;
		const { rows } = await pool.query(stmt, [email]);

		return rows.length > 0 ? rows[0] : null;
	} catch (error) {
		logger.error("Database error in getUserByEmailModel:", error);
		throw new Error("Failed to fetch user");
	}
};

export async function storeUserModel({
	user_role_id,
	firstname,
	lastname,
	username,
	email,
	password,
}) {
	try {
		const stmt = `
			INSERT INTO users 
			(user_role_id, firstname, lastname, username, email, password)
			VALUES
			($1, $2, $3, $4, $5, $6)
			RETURNING user_role_id, firstname, lastname, username, email;
		`;

		const { rows } = await pool.query(stmt, [
			user_role_id,
			firstname,
			lastname,
			username,
			email,
			password,
		]);

		return rows[0]; // Return the newly created user (without password)
	} catch (error) {
		logger.error("Database error in storeUserModel:", error);
		throw new Error("Failed to store user");
	}
}
