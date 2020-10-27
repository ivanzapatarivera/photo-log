const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusUpdate = new Schema ({
 
    statusUpdate: {
        type: String,
        required: true
    }, 
    timestamp: {
        type: Date,
        default: Date.now
    }
  
});

const StatusUpdate = mongoose.model("StatusUpdate", statusUpdate);
module.exports = StatusUpdate;