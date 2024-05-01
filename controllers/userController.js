const { User, Thought } = require("../models");

module.exports = {
  // get all Users
  async getUsers(req, res) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //   get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({
        _id: req.params.userId,
      });

      if (!user) {
        return res.status(404).json({
          message: "No user found with that id",
        });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json(err);
    }
  },

  // Creates a new User
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json({ message: "User deleted!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

async addFriend(req, res) {
  try{
    const user = await User.findOneAndUpdate(
      {_id: req.params.userId},
      { $addToSet: {friends: req.body} },
      { runValidators: true, new: true}
    );

    if(!user) {
      return res.status(404).json({ message: 'No user with this id'});
    }

    res.json(user);
  } catch(err) {
    res.status(500).json(err);
  }
},

async deleteFriend(req, res) {
  try{
    const user = await User.findOneAndRemove(
      { _id: req.params.userId },
      { $pull: { friends: req.params.userId} },
    );

    if(!user) {
      return res.status(404).json({ message: "No friend with this id"});
    }
    res.json({ message: 'friend deleted successfully'})
  } catch(err) {

  }
},

};
