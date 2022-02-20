const Mongoose = require("mongoose");
const Article = Mongoose.model('Event');



exports.get_all = (req, res) => {
  Article.find().exec((error, doc) => {
    if (error) {
      res.status(400).send(error)
      throw error
    }
    else {
      res.status(200).send(doc)
    }
  })

};
exports.create = (req, res) => {
  const article = new Article(req.body);
  article.save((error, doc) => {
    if (error) {
      res.status(500).send({ error: error })
      throw error;
    } else {
      res.status(200).send({ success: "new article is added", article: doc })
    }
  });
};
exports.update = (req, res) => {
  console.log(req.params.id)
  if (req.params.id) {
    Article.findByIdAndUpdate(req.params.id, req.body).exec((error, doc) => {
      if (error) {
        res.status(400).send(error)
        throw error
      }
      else {
        res.status(200).send(doc)
      }
    })
  }
};
exports.delete = (req, res) => {
  console.log(req.params.id)
  Article.findByIdAndDelete({ _id: req.params.id }).exec((error, doc) => {
    if (error) {
      res.status(400).send(error)
      throw error
    }
    else {
      res.status(200).send(doc)
    }
  })

};
exports.detail = (req, res) => {
  console.log(req.params.id)
  if (req.params.id) {
    Article.findById(req.params.id).exec((error, doc) => {
      if (error) {
        res.status(400).send(error)
        throw error
      }
      else {
        res.status(200).send(doc)
      }
    })
  }

};
