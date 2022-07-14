const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/auth/login", async (req, res, next) => {
  try {
    //   get email,password from body
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("missing credentials");
    }
    // finduser with this email

    const use = await User.findOne({
      where: { email: email },
    });
    if (!User) return res.status(400).send("wrong credentials!");
    // compare passwords
    const samePasswords = bcrypt.compareSync(password, User.password);
    if (samePasswords) {
      const token = toJWT({ UserId: User.id });
      console.log("All good!");
      res.send({ message: "Welcome!! you are logged in", token });
    } else {
      return res.status(400).send({ message: "Wrong credentials!" });
    }
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

module.exports = router;
