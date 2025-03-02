import express from "express";
import cors from "cors";
import helmet from "helmet";
import settings from "../settings/index.settings.js";
import { logger, httpLogger } from "./config/logger.config.js";
import { establishDbConnection } from "./config/db.config.js";

const app = express();
establishDbConnection();

app.use(cors({
	origin: [settings.CORS_ORIGIN],
	credentials: true
}))
app.use(helmet());
app.use(httpLogger);

app.get("/", async (req, res) => {
	res.status(200).json({ message: "The server is running well" });
});

const PORT = settings.PORT ?? 8080;
app.listen(PORT, async () => {
	logger.info('Running in:', process.env.NODE_ENV);
	logger.info(`API Base URL: ${settings.apiBaseUrl}`);
});

