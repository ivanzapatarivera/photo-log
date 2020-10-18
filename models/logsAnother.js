const mongoose = require("mongoose");
const SchemaAnother = mongoose.Schema;

const logsAnother = new SchemaAnother ({

    title: {
        type: String,
        required: true
    }, 
    URL: {
        type: String,
        required: true
    }, 
    location: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        require: true
    }

});

const LogsAnother = mongoose.model("PhotoLogAnother", logsAnother);
module.exports = LogsAnother;