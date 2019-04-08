//exercise a
//index.js

const func = require('./func');

const pathModule = require('path');

function outPut(filePath) {
	func
		.stat(filePath)
		.then(function(stats) {
			if (stats.isDirectory()) {
				console.log(filePath + ' is a directory.');
				traverseFolders(filePath);
			} else {
				console.log(filePath + ' is a file');
			}
		})
		.catch(function(error) {
			console.log(error);
		});
}

function traverseFolders(path) {
	func
		.readdir(path)
		.then(function(files) {
			console.log(files);
			for (let file of files) {
				const filePath = pathModule.join(path, file);
				outPut(filePath);
			}
		})
		.catch(function(error) {
			console.log(error);
		});
}

func.readdir('./files').then(function(data) {
	console.log(data);
});

func.stat('./files').then(function(data) {
	console.log(data.isDirectory());
});
