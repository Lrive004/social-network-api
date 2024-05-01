const router = require("express").Router();
const thoughtsRoutes = require("./thoughtsRoutes");
const usersRoutes = require("./usersRoutes");
// const reactionsRoutes = require("./reactionsRoutes")

router.use("/thoughts", thoughtsRoutes);
router.use("/users", usersRoutes);
// router.use("/reactions", reactionsRoutes);

module.exports = router;
