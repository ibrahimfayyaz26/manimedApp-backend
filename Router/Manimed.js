const express = require("express");
const Manimed = require("../model/manimed");
const router = express.Router();

router.get("/", (req, res) => {
  Manimed.find()
    .then((result) => {
      res.send(result);
    })
    .catch((er) => {
      console.log(er);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Manimed.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((er) => {
      console.log(er);
    });
});

router.post("/post", (req, res) => {
  const newMani = new Manimed({
    name: req.body.name,
    imageUri: req.body.imageUri,
    code: req.body.code,
    size: req.body.size,
    category: req.body.category,
    subCategory: req.body.subCategory,
  });
  newMani
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Manimed.findById(id)
    .then((data) => {
      data.name = req.body.name;
      data.imageUri = req.body.imageUri;
      data.code = req.body.code;
      data.size = req.body.size;
      data.category = req.body.category;
      data.subCategory = req.body.subCategory;

      return data.save();
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Manimed.findByIdAndRemove(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
