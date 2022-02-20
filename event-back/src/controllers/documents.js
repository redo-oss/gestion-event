// const Mongoose = require("mongoose");
// const HTML = Mongoose.model('HTML');
// const nodemailer = require('nodemailer');
// const fs = require('fs')



// exports.get_all = (req, res) => {
//   HTML.find().exec((error, doc) => {
//     if (error) {
//       res.status(400).send(error)
//       throw error
//     }
//     else {
//       res.status(200).send(doc)
//     }
//   })

// }
// exports.create = (req, res) => {
//   const html = new HTML(req.body);
//   html.save((error, doc) => {
//     if (error) {
//       res.status(500).send({ error: error })
//       throw error;
//     } else {
//       res.status(200).send({ success: "new newsletter is added" })
//     }
//   });


// }
// exports.update = (req, res) => {
//   console.log(req.params.id)
//   if (req.params.id) {
//     HTML.findByIdAndUpdate(req.params.id, req.body).populate('list').exec((error, doc) => {
//       if (error) {
//         res.status(400).send(error)
//         throw error
//       }
//       else {
//         res.status(200).send(doc)
//       }
//     })
//   }
// }
// exports.delete = (req, res) => {
//   console.log(req.params.id)
//   HTML.findByIdAndDelete({ _id: req.params.id }).exec((error, doc) => {
//     if (error) {
//       res.status(400).send(error)
//       throw error
//     }
//     else {
//       res.status(200).send(doc)
//     }
//   })

// }
// exports.detail = (req, res) => {
//   console.log(req.params.id)
//   if (req.params.id) {
//     HTML.findById(req.params.id).populate('list').exec((error, doc) => {
//       if (error) {
//         res.status(400).send(error)
//         throw error
//       }
//       else {
//         res.status(200).send(doc)
//       }
//     })
//   }

// }

