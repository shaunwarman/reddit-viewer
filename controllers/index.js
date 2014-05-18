'use strict';


var IndexModel = require('../models/index');
var request = require('request');

module.exports = function (app) {

    var model;


    app.get('/', function (req, res) {
        
        var search = request("http://www.reddit.com/r/programming/top.json", function (error, response, body) {
			if (!error && response.statusCode == 200) {
		  		model = JSON.parse(body);
			}
			console.log(model.data.children);
    		res.render('reddit', model);
		});
    });
};
