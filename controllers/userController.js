const { Thought } = require('../models');
const User = require('../models/User');

module.exports = {
  //find all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  // find a single user based on userID
  getSingleUser(req, res) {
     User.findOne({ _id: req.params.userId })
     //populates the friend data - inc the friends of friends
     .populate({ path: 'friends', populate: { path: 'friends' } })
     .populate({ path: 'thoughts' })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)});
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
// update a user based on the userId
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
//delete user based on userId
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : Thought.deleteMany({_id: {$in: user.thoughts}}), 
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'User created but no user with this id!' })
          : res.json({ message: 'User successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
// add a friend to an existing user, using the userid of the frined to add to the user
   addUserFriend(req, res) {
     User.findOneAndUpdate(
       { _id: req.params.userId },
       //{ $push: { friends: req.params.friendId } },
       { $addToSet: { friends: req.body } },
       { runValidators: true, new: true }
     )
       .then((user) =>
         !user
           ? res.status(404).json({ message: 'No user with this id!' })
           : res.json(user)
       )
       .catch((err) => res.status(500).json(err));
   },

 
  // remove a friend of an existing user, using the userid of the friend to remove from the user
  removeUserFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull:  { friends: req.params.friendId } },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
};
