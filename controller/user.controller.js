const user = require('../model/user.model');

exports.getUserList = (req, res) => {
  res.status(200);
  res.json({
    status_code: 200,
    message: 'request successfull',
    data: user,
  });
  res.end();
};

exports.addNewUser = (req, res) => {
  res.status(200);
  res.json({
    status_code: 200,
    message: 'request successfull',
    data: user,
  });
  res.end();
};

exports.updateUserInfo = (req, res) => {
  res.status(200);
  res.json({
    status_code: 200,
    message: 'request successfull',
    data: user,
  });
  res.end();
};

exports.removeUser = (req, res) => {
  res.status(200);
  res.json({
    status_code: 200,
    message: 'request successfull',
    data: user,
  });
  res.end();
};
