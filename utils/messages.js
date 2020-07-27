const moment = require("moment");
require("moment/min/locales.min");
moment.locale("pl");

function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().format("HH:mm"),
    };
}

module.exports = formatMessage;
