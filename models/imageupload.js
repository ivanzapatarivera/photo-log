const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var images = new Schema(
    { img: 
        { 
            data: Buffer, 
            contentType: String }
    }
  );
  var Image = mongoose.model('imageUpload', images);
  module.exports = Image;