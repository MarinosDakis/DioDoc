import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {
    
    // we want to get email & password
    const { email, password } = req.body;

    try {
        // find existing user
        const existingUser = await User.findOne( { email });

        // if user doesn't exist
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist!" });

        // otherwise check if password is correct with bcrypt
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        // if password doesn't match with stored data
        if (!isPasswordCorrect) return res.status(404).json({ message: "Invalid credentials " });

        // if password matches and existing user
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test", { expiresIn: "1h" });

        // return the token
        res.status(200).json( {result: existingUser, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
};

export const signup = async (req, res) => {

    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        // see if the user already exists
        const existingUser = await User.findOne( { email });
    
            // if user exists
            if (existingUser) return res.status(400).json({ message: "User already exists!" });
    
            // see if passwords are the same
            if (password !== confirmPassword) res.status(400).json({ message: "Passwords don't match" });

            // if we are making a new user and passwords are the same then we need to hash password for new user
            const hashedPassword = await bcrypt.hash(password, 12);

            // store user in DB
            const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`})

            // create token
            const token = jwt.sign({ email: result.email, id: result._id }, "test", { expiresIn: "1h" });

            // return the token
            res.status(200).json( {result, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }

};