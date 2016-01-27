devops-version-status
===================

A module shows
    1) Version info from pakcage.json
    2) Status as 'Ok'

## Installation
    npm install devops-version-status --save

## usage
    //in Gruntfile.js or Gulpfile.js
    var app = express();
    var vs = require('devops-version-status');
    vs(app);

    // After starting the server,
    // http://host.com/version, shows the version
    // http://host.com/status, shows 'Ok'

## test
    npm test

## Contributing
    brybwy@gmail.com

## Release History
    * 1.0.0 Initial release
