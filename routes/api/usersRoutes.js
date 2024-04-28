const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");

// api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser);

// router.post((req, res) => {});

// router.put((req, res) => {});

// router.delete((req, res) => {});

// api/users/:userId/friends/:friendId

module.exports = router;
