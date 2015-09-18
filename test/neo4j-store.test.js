'use strict';

var seneca = require('seneca');
var shared = require('seneca-store-test');
var Lab = require('lab');

var lab = exports.lab = Lab.script();
var describe = lab.describe;

//Enter your data source details
var dataSource = {
    host: 'localhost',
    port: 7474,
    username: 'neo4j',
    password: '12345'
};

var si = seneca();
si.use(require(".."), dataSource);

describe('data-store', function(){
    shared.basictest({
        seneca: si,
        script: lab
    });
});