const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { sendResponseToFrontend, handleLoginError } = require("../shared/handleResponse");


// user register controller
module.exports.registerUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        sendResponseToFrontend(res, 201, user, false);
    } catch (err) {
        sendResponseToFrontend(res, 400, handleError(err), true);
    }
};

// handle errors messages
const handleError = (err) => {
    let errorMsgString;
    if (!err.code) {
      let errArr = [];
      Object.values(err.errors).forEach((element) => {
        errArr.push(element.message);
      });
      errorMsgString = errArr.join(", ");
    } else {
      errorMsgString = "Email address is already there is DB";
    }
    return errorMsgString;
  };
  

// user login controllers
module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // create token
    const token = jwt.sign({ _id: user._id }, process.env.SECRETKEY);
    res.cookie("token", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
    const { _id, role } = user;
    res.status(200).json({ token: token, user: { _id, email, role } });
  } catch (err) {
    sendResponseToFrontend(res, 404, handleLoginError(err), true);
  }
};