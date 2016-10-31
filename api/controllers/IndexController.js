'use strict';

var os = require('os');
var pkg = require('../../package.json');
let emit = 1;

setInterval(function () {
  emit = emit + 1;
  sails.log.verbose('broadcast message', emit);
  sails.sockets.broadcast('myroom', {
    emit,
    hallo: 'welt'
  });
  sails.sockets.blast({
    emit,
    foo: "BAR"
  });
}, 1000);

exports.get = function (request, response) {
  request.session.views = (request.session.views) ? request.session.views + 1 : 1;
  var locals = response.locals;
  locals.pid = process.pid;
  locals.hostname = os.hostname();
  locals.version = pkg.version;
  return response.view();
};

exports.socket = function (request, response) {

  request.session.views = (request.session.views) ? request.session.views + 1 : 1;
  var locals = response.locals;
  locals.pid = process.pid;
  locals.hostname = os.hostname();
  locals.version = pkg.version;
  return response.view();
};

exports.join = function (request, response) {
  if (!request.isSocket) {
    return response.badRequest();
  }

  sails.sockets.join(request, 'myroom', function (error) {
    if (error) {
      return response.serverError(error);
    }

    return response.json({
      message: 'Subscribed to a fun room called myroom!'
    });
  });
};
