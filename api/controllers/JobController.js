
 /**
 * JobController
 *
 * @description :: Server-side logic for managing jobs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

show: function (req, res){
var request = require('request');
var gm = require('googlemaps');
var util = require('util');
url = "http://api.indeed.com/ads/apisearch?publisher=5506945110621672&q=&l=london&sort=&radius=&st=&jt=&start=&limit=50&fromage=&filter=&latlong=1&co=uk&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&format=json&v=2";
request.get(url, function(error, response, body) {

 json = JSON.parse(body);
 indeed = json.results;
 var gData = [];

 indeed.forEach(function(name) {

  location = name.latitude + ',' + name.longitude;

  gm.reverseGeocode(location, function(err, data){
  indeed.googlemaps = data;
  // util.puts(gm.staticMap(name.formattedLocation, 15, '500x400', false, false, 'roadmap'));
  });
 });
 console.log(JSON.stringify(indeed.googlemaps));
 res.view({
  sj: indeed
 });
 


});

}

	
};

