const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logs = new Schema ({

    log: {
        type: String,
        required: true
    }, 
    location: {
        type: String,
        required: true
    },
    timestamp: {
        type: String, 
        required: true
    }

});

const Logs = mongoose.model("PhotoLog", logs);
module.exports = Logs;