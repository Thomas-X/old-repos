#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
const exec = require('child_process').exec;

program
    .version('1.0.3')
    .option('-p, --port <port>', 'Change the port from the default 3004')
    .option('-w, --watch <file>', 'Watch a certain .json file as the db (default db.json)')
    .action((envs) => {
        console.log(envs);
    })
    .parse(process.argv);

console.log(program.port);
