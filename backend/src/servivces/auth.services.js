import { storeUserModel, getUserByEmailModel } from "../models/auth.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import settings from "../../settings/index.js";

export async function signUpService(user_role_id, firstname, lastname, username, email, password) {
	// validate all fields
	if (!user_role_id || !firstname || !lastname || !username || !email || !password) {
		throw new Error("MISSING FIELD(S)");
	}

	// validate not an existing user
	const existingUser = await getUserByEmailModel(email);
	if (existingUser) {
		throw new Error("USER EXISTS");
	}

	// Hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	// Store new user
	const newUser = await storeUserModel({
		user_role_id,
		firstname,
		lastname,
		username,
		email,
		password: hashedPassword
	});

	return newUser;
};

export async function signInService(email, password) {
	// Validate input fields
	if (!email || !password) {
		throw new Error("MISSING FIELD(S)");
	}

	// Ensure TOKEN_SECRET is set
	if (!settings.TOKEN_SECRET) {
		throw new Error("Server misconfiguration: TOKEN_SECRET is missing");
	}

	// Validate that the user exists
	const existingUser = await getUserByEmailModel(email);
	if (!existingUser) {
		throw new Error("USER DOES NOT EXIST");
	}

	// Match the input password with the hashed password
	const isPasswordSame = await bcrypt.compare(password, existingUser.password);
	if (!isPasswordSame) {
		throw new Error("INCORRECT PASSWORD");
	}

	// Generate JWT token (expires in 1 day)
	const token = jwt.sign(
		{ email: existingUser.email, user_id: existingUser.users_id },
		settings.TOKEN_SECRET,
		{ expiresIn: "1d" }
	);

	// Return the user details excluding the password
	const { users_id, user_role_id, firstname, lastname, username, email: userEmail } = existingUser;

	return {
		user: {
			users_id,
			user_role_id,
			firstname,
			lastname,
			username,
			email: userEmail
		},
		token
	};
};
