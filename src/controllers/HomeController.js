const db = require("../conneted");

const multer  = require('multer')
const upload = multer()

class HomeController {
  getData(req, res) {
    var detect = req.body.detect;
    //get list
    if (detect == "list") {
      let sql = "SELECT * FROM category";
      db.query(sql, (err, response) => {
        if (err) throw err;
        res.json({
          success: "true",
          data: response,
        });
      });
    }
    // insert
    if (detect === "insert") {
      let data = req.body;
      var sql =`INSERT INTO category SET `;
      if(data.name){
       sql = sql.concat(' ', `name = '${data.name}'`)
      }

      if(data.image){
        sql = sql.concat(' ,', `image = '${data.image}'`)
      }

     db.query(sql, [data], (err, response) => {
        if (err) throw err;
        res.json({
          success: "true",
          message: "Tạo danh mục thành công",
        });
      });
    }
    // update
    if (detect === "update") {
      let data = req.body;
      let sql =`UPDATE category SET `;
      if(data.name){
       sql = sql.concat(' ', `name = '${data.name}'`)
      }

      if(data.image){
        sql = sql.concat(' ,', `image = '${data.image}'`)
      }

      sql = sql.concat(' ', `WHERE id = '${data.id}'`)

      db.query(sql, [data], (err, response) => {
        if (err) {
          res.json({
            success: "false",
            message: err,
          });
          throw err;
        } else {
          res.json({
            success: "true",
            message: "Cập nhật danh mục thành công",
          });
        }
      });
    }
  }
}

module.exports = new HomeController();
