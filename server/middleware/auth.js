// adapted from: https://www.youtube.com/watch?v=LKlO8vLvUao&list=RDCMUCmXmlB4-HJytD7wek0Uo97A&index=1&ab_channel=JavaScriptMastery

import jwt from "jsonwebtoken";

// how middleware works:
// user wants to do action => auth middleware (next) =(if has permission)> action permitted

const auth = async (req, res, next) => {

    try {
        // check if a token is valid
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        // if we're working with our token
        if (token && isCustomAuth) {

            decodedData = jwt.verify(token, "test");
            req.userId = decodedData?.id;

        } else {

            // if we're working with Google Auth
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;

        }

        next();

    } catch (error) {
        console.log(error);
    }
}

export default auth;