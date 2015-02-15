var cleaner = {};
var _ = require('underscore');

cleaner.filterLinks = function(model, callback) {
    var links = [];
    var articles = model.data.children;

    articles.forEach(function(element) {
        var url = element.data.url;

        if(url.indexOf("reddit.com") === -1) {
            links.push({ value: element });
        }

    });
    callback(links);
};

module.exports = cleaner;
