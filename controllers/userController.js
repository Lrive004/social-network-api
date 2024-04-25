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
};

