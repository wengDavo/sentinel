import supertest from "supertest";
import { expect } from "chai";
import { describe, it } from "mocha";

import app from "../../src/index.js";
import { establishDbConnection } from "../../src/config/db.config.js";

const testApp = supertest(app);

describe("Server", () => {
	describe("GET /", () => {
		it("should respond with a status 200 and a message", async () => {
			const resp = await testApp.get("/");

			expect(resp.status).to.equal(200);
			expect(resp.body).to.be.an("object");
			expect(resp.body).to.have.property("message").that.is.a("string");
			expect(resp.body.message).to.equal("The server is running");
		});

		it("should have content-type application/json", async () => {
			const resp = await testApp.get("/");
			expect(resp.header["content-type"]).to.include("application/json");
		});
	});

	describe("POST /", () => {
		it("should respond with a status 405 Not Allowed for POST request", async () => {
			const resp = await testApp.post("/");
			expect(resp.status).to.equal(405);
		});
	});

	describe("Invalid Route", () => {
		it("should respond with a status 404", async () => {
			const resp = await testApp.post("/okhdhakhad");
			expect(resp.status).to.equal(404);
		});
	})

	describe("Database", () => {
		it("should connect to the database", async () => {
			try {
				const db = await establishDbConnection();
				expect(db).to.not.be.null;
				expect(db).to.have.property("pool");
			} catch (error) {
				throw new Error("Database connection failed: " + error.message);
			}
		});
	});
});

