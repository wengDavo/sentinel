import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import development from "./development.settings.js";
import production from "./production.settings.js";
import test from "./test.settings.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`)

dotenv.config({ path: envPath });

const NODE_ENV = process.env.NODE_ENV ?? "development";
const ENV_VAR = process.env;

const settings = {
	development,
	production,
	test
};

export default { ...settings[NODE_ENV], ...ENV_VAR };
