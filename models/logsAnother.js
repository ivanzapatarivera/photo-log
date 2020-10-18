const mongoose = require("mongoose");
const SchemaAnother = mongoose.Schema;

const logsAnother = new SchemaAnother ({

    titleAnother: {
        type: String,
        required: true
    }, 
    URLAnother: {
        type: String,
        required: true
    }, 
    locationAnother: {
        type: String,
        required: true
    }, 
    descriptionAnother: {
        type: String,
        require: true
    }

});

const LogsAnother = mongoose.model("PhotoLogAnother", logsAnother);
module.exports = LogsAnother;