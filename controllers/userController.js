const { Thought } = require('../models');
const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
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

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : Thought.deleteMany({_id: {$in: User.thoughts}}), 
          User.findOneAndUpdate(
              { users: req.params.userId },
              { $pull: { friends: req.params.userId } },
              { new: true }
            )
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

 
  // Remove video response
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
