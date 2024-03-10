const router = require('express').Router();
const {
  getUserList, addNewUser, updateUserInfo, removeUser,
} = require('../controller/user.controller');

// All user list route
router.get('/get-user-list', getUserList);

// Add new user route
router.post('/add-user', addNewUser);

// Update user info
router.put('/update-user', updateUserInfo);

// Delete user info
router.delete('/remove-user', removeUser);

module.exports = router;
