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
	try {
		res.status(200).json({ message: "The server is running" });
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
});

app.all("/", (req, res) => {
	res.status(405).json({ error: new Error("Wrong method") })
});

app.all("*", (req, res) => {
	res.status(404).json({
		error: new Error("not a valid route")
	})
})

const PORT = settings.PORT ?? 8080;
app.listen(PORT, async () => {
	logger.info('Running in:', process.env.NODE_ENV);
	logger.info(`API Base URL: ${settings.apiBaseUrl}`);
});

export default app;
