'use strict';


var IndexModel = require('../models/index');
var request = require('request');

module.exports = function (app) {
    var model;

    app.get('/:topic', function (req, res) {
        var topic = req.params.topic;
        
        request("http://www.reddit.com/r/"+topic+".json", function (error, response, body) {
			if (!error && response.statusCode === 200) {
		  		model = JSON.parse(body);
			}
            console.log(model.data.children[1]);
    		res.render('reddit', model);
		});
    });
};
