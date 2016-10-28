'use strict';

var os = require('os');
var pkg = require('../../package.json');

exports.get = function (request, response) {
  request.session.views = (request.session.views) ? request.session.views + 1 : 1;
  var locals = response.locals;
  locals.pid = process.pid;
  locals.hostname = os.hostname();
  locals.version = pkg.version;
  return response.view();
};
