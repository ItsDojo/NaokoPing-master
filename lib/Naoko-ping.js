'use strict';

// ping
var p = require('ping');


exports.ping = function(host, config){
	return p.promise.probe(host, config || {});
};
