import development from "./development.settings.js";
import production from "./production.setting.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
	path: path.resolve(__dirname, `../env/.env.${process.env.NODE_ENV || 'development'}`)
});

const NODE_ENV = process.env.NODE_ENV ?? "development";
const ENV_VAR = process.env;

const settings = {
	development,
	production
};

export default { ...settings[NODE_ENV], ENV_VAR };
