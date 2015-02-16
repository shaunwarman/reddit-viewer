var url = {},
    _ = require('underscore');

url.createUrl = function (options) {
    var link = "";

    _.each(options, function (element) {
        link += element;
    });

    return link;
};

module.exports = url;
