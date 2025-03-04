import { logger } from "../config/logger.config.js";
import { signInService, signUpService } from "../servivces/auth.services.js";

export async function signUp(req, res) {
	const {
		user_role_id,
		firstname,
		lastname,
		username,
		email,
		password
	} = req.body;

	try {
		const user = await signUpService(user_role_id, firstname, lastname, username, email, password);

		return res.status(201).json({
			message: "User created successfully",
			user
		});
	} catch (error) {
		if (error.message === "MISSING FIELD(S)") {
			return res.status(400).json({ message: error.message });
		}
		if (error.message === "USER EXISTS") {
			return res.status(409).json({ message: error.message });
		}
		logger.error("Error creating user:", error);
		return res.status(500).json({ message: error.message });
	}
};

export async function signIn(req, res) {
	const { email, password } = req.body;

	try {
		const { user, token } = await signInService(email, password);

		// send cookie first to avoid headers already sent error
		res.cookie("jwt_token", token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24, // 1 day
		})
		return res.status(200).json({ message: "USER LOGGED IN", user });

	} catch (error) {
		if (error.message === "MISSING FIELD(S)") {
			return res.status(400).json({ message: "All fields are required." });
		}
		if (error.message === "USER DOES NOT EXIST") {
			return res.status(404).json({ message: error.message })
		}
		if (error.message === "INCORRECT PASSWORD") {
			return res.status(401).json({ message: error.message })
		}
		logger.error("Error signing in user:", error);
		return res.status(500).json({ message: error.message });
	}
}

export function signOut(req, res) {
	try {
		if (!req.cookies?.jwt_token) {
			return res.status(401).json({ message: "No active session to log out" });
		}

		// Clear the JWT cookie securely
		res.clearCookie("jwt_token", {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production", // Secure in production
			sameSite: "strict" // Prevent CSRF
		});

		return res.status(200).json({ message: "Successfully logged out" });

	} catch (error) {
		return res.status(500).json({ message: "Failed to log out", error: error.message });
	}
}

