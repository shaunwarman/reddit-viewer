'use strict';


var IndexModel = require('../models/index');
var request = require('request');
var cleaner = require('../lib/cleaner');

module.exports = function (app) {
    var model;
    var top = "/top";

    app.get('/', function (req, res) {
       console.log('Render homepage');
       res.render('homepage');
    });

    app.get('/:topic', function (req, res) {
        var topic = req.params.topic;
        var query = "?sort=top&t=week&limit=100"

        request("http://www.reddit.com/r/"+topic+top+".json"+query, function (error, response, body) {
			if (!error && response.statusCode === 200) {
		  		model = JSON.parse(body);
			}
            model.subtitle = topic;

            cleaner.filterLinks(model, function(links) {
                model.links = links;
                res.render('reddit', model);
            });
		});

    });
};
