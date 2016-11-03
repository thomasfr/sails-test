'use strict';

const cluster = require('cluster');
const numCPUs = process.env.NODE_WORKERS || require('os').cpus().length;

process.chdir(__dirname);

cluster.setupMaster({
  exec: 'app.js',
  silent: false
});

// Fork workers.
for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}

cluster.on('exit', (worker, code, signal) => {
  console.error("Worker '%s' died. Code: '%s' Signal: '%s'", worker.process.pid, code, signal);
  setTimeout(() => cluster.fork(), 250);
});
