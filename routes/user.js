const { Router } = require("express");
const User = require("../models").user;
const router = new Router();

router.get("/users", async (req, res, next) => {
  try {
    const allUsers = await user.findAll();
    res.json(allUsers);
  } catch (error) {
    console.log(error.message);
    next();
  }
});

router.post("/users/signup", async (req, res, next) => {
  try {
    const { email, password, fullname } = req.body;
    if (!email || !password || !fullname) {
      res.status(400).send("missing credentials");
    } else {
      const newUser = await User.create({
        email,
        password,
        fullname,
      });
      res.json(newUser);
    }
  } catch (error) {
    console.log(message);
    next(error);
  }
});
module.exports = router;
