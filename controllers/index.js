'use strict';


var IndexModel = require('../models/index');
var request = require('request');

module.exports = function (app) {

    var model,
    	search;


    app.get('/:topic', function (req, res) {
        var topic = req.params.topic;
        
        search = request("http://www.reddit.com/r/"+topic+"/top.json", function (error, response, body) {
			if (!error && response.statusCode == 200) {
		  		model = JSON.parse(body);
			}
			
    		res.render('reddit', model);
		});
    });
};
