import pg from 'pg';
const { Pool } = pg;
import { logger } from './logger.config.js';

const databaseConfig = {
	connectionString: process.env.DATABASE_URL,
};

export const pool = new Pool(databaseConfig);

// Test and establish the database connection
export async function establishDbConnection() {
	try {
		const connection = await pool.connect();
		const res = await connection.query("SELECT NOW()");
		logger.info("Database connection successful:", res.rows[0]);
		connection.release();
	} catch (err) {
		logger.error("Error connecting to the database:", err);
		process.exit(1);
	}
};

