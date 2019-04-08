//func.js
const fs = require('fs');

//fs.readdir
module.exports.readdir = function(path) {
	return new Promise(function(resolve, reject) {
		fs.readdir(path, function(err, files) {
			if (err) {
				reject(err);
			} else {
				resolve(files);
			}
		});
	});
};

//fs.stat
module.exports.stat = function(path) {
	return new Promise(function(resolve, reject) {
		fs.stat(path, function(err, stats) {
			if (err) {
				reject(err);
			} else {
				resolve(stats);
			}
		});
	});
};
