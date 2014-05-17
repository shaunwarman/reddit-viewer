'use strict';


var IndexModel = require('../models/index');
var request = require('request');

module.exports = function (app) {

    var model = new IndexModel();


    app.get('/', function (req, res) {
        
        var search = request("http://api.songkick.com/api/3.0/search/locations.json?query=austin&apikey=XeObOQWL7THUjh05", function (error, response, body) {
			if (!error && response.statusCode == 200) {
		  		console.log(body);
			}
		});

    });
};
