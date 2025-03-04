import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import settings from "../settings/index.js";
import { logger, httpLogger } from "./config/logger.config.js";
import { establishDbConnection } from "./config/db.config.js";

import AuthRouter from "./routes/auth.routes.js";

const app = express();
establishDbConnection();

app.use(cors({
	origin: [settings.CORS_ORIGIN],
	credentials: true
}))
app.use(helmet());
app.use(httpLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", async (req, res) => {
	try {
		res.status(200).json({ message: "The server is running" });
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
});

app.use("/api/v1/auth", AuthRouter);

app.use("/", (req, res) => {
	res.status(405).json({ message: "WRONG METHOD" })
});

app.all("*", (req, res) => {
	res.status(404).json({
		message: "NOT A VALID ROUTE"
	})
})

const PORT = settings.PORT ?? 8080;
app.listen(PORT, async () => {
	logger.info(`Running in: ${settings.NODE_ENV}`);
	logger.info(`API Base URL: ${settings.apiBaseUrl}`);
});

export default app;
