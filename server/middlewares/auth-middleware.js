const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
// const { user } = require("../controllers/auth-controller");

const authMiddleware = async (req, res, next) => {
  //if next is not called it'll not iterate to next middle ware
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not Provided" });
  }

  //assuming that token is in format Bearer <jwtToken>
  const jwtToken = token.replace("Bearer", "").trim();
  //   console.log("Token from AuthMiddleWare->",jwtToken);
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    // console.log("isVerified->",isVerified);

    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    // console.log("userData->", userData);

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized, Invalid Token" });
  }
};

module.exports = authMiddleware;
