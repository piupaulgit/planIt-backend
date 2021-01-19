module.exports.sendResponseToFrontend = (res, statusCode, data, errorFlag, message ) => {
    return res.status(statusCode).json({
        data: data,
        error: errorFlag,
        message: message
    })
}

// handle errors messages
module.exports.handleError = (err) => {
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