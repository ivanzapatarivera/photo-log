const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profilepic = new Schema ({
 
    URL: {
        type: String,
        required: true
    } 
  
});

const ProfilePic = mongoose.model("ProfilePic", profilepic);
module.exports = ProfilePic;