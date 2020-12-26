// const fs = require("fs");

// const db = require("../models/image.model");
// const Image = db.images;

// const uploadFiles = async (req, res) => {
//   try {
//     console.log(req.file);

//     if (req.file == undefined) {
//       return res.send(`You must select a file.`);
//     }

//     Image.create({
//       type: req.file.mimetype,
//       name: req.file.originalname,
//     }).then((image) => {
//       fs.writeFileSync(
//         __basedir + "/resources/static/assets/tmp/" + image.name,
//         image.data
//       );

//       return res.send(`File has been uploaded.`);
//     });
//   } catch (error) {
//     console.log(error);
//     return res.send(`Error when trying upload images: ${error}`);
//   }
// };

// module.exports = {
//   uploadFiles,
// };

function upload(req, res){
  if(req.file.filename){
      res.status(201).json({
          mesaage: "Image upload successfully",
          url: req.file.filename
      });
  }else{
      res.status(500).json({
          mesaage: "Something went wrong!"
      });
  }
}

module.exports = {
  upload: upload
}