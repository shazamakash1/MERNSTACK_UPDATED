const adminMiddleware = async (req, res, next) => {
  try {
    
    const adminRole = req.user.isAdmin;
    // console.log(adminRole);
    if (!adminRole) {
      return res
        .status(403)
        .json({ message: "ACCESS DENIED! User is not an Admin." });
    }
    // res.status(200).json({ message: req.user.isAdmin });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
