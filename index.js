var fs = require('fs');

var getVersion = function(cb) {
	fs.readFile('./package.json', 'utf8', function(er, d) {
		if(er) {
			cb('Error in opening package.json ' + er)
		}
		else {
			try {
				var p = JSON.parse(d);
			} catch(err) {
				cb('Error in parsing package.json '+ err);
			}
			if(p.version) {
				cb(p.version)
			}
			else {
				cb('Cannot find version info from package.json')
			}
		}

	});
}

module.exports = function(app) {
	app.use('/status', function(req, res, next) {
		res.write('Ok');
		res.end()
	})
	getVersion(function(versioninfo){
		app.use('/version', function(req, res, next) {
			res.write(versioninfo);
			res.end();
		})
	})
}

