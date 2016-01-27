var expect = require('chai').expect,
	v = require('../index');

describe('test \'/status\' and \'/version\'', function() {
	it('status should return OK, version should be 1.0.0', function(done) {
		var testing;
		var fakeapp = {}
		var res = {},req={},next={};
		res.write = function(str) {
			if(testing == '/status') {
				expect(str).to.equal('Ok')
			}
			if(testing == '/version') {
				expect(str).to.equal('1.0.0')
				done();
			}
		}
		res.end = function(){}
		fakeapp.use = function (p1, f) {
			testing=p1;
			f(req,res,next);
		}
		v(fakeapp);
	});
});
