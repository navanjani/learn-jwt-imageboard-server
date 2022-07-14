const { Router } = require("express");
const Image = require("../models").image;

const router = new Router();

router.get("/images", async (req, res, next) => {
  try {
    const allImages = await Image.findAll();
    res.json(allImages);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    const newImage = Image.create({ title, url });
    res.send(newImage);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});

module.exports = router;
