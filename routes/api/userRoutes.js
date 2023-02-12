const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  getUserFriends,
  addUserFriend,
  removeUserFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
router.route('/:userId/friends').get(getUserFriends);

// /api/users/:userId/friends/:friendId
//router.route('/:userId/friends/:friendId').post(addUserFriend).delete(removeUserFriend);

module.exports = router;