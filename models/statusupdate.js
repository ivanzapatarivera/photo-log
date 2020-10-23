const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusUpdate = new Schema ({
 
    statusUpdate: {
        type: String,
        required: true
    } 
  
});

const StatusUpdate = mongoose.model("StatusUpdate", statusUpdate);
module.exports = StatusUpdate;