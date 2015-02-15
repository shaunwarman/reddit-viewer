'use strict';


var IndexModel = require('../models/index');
var request = require('request');
var cleaner = require('../lib/cleaner');

module.exports = function (app) {
    var model;
    var top = "/top";

    app.get('/:topic', function (req, res) {
        var topic = req.params.topic;
        var query = "?sort=top&t=week&limit=100"

        request("http://www.reddit.com/r/"+topic+top+".json"+query, function (error, response, body) {
			if (!error && response.statusCode === 200) {
		  		model = JSON.parse(body);
                console.log(model);
			}
            model.subtitle = topic;

            var articles = cleaner.filterLinks(model, function(links) {
                model.links = links;
                res.render('reddit', model);
            });
		});

    });
};
