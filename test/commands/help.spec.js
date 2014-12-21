'use strict';

var expect = require('expect.js');

var helpers = require('../test-helpers');
var commands = helpers.require('lib/commands');

describe('node-svm help', function () {
    it('should return basic help when no command name', function(done){
        var logger = commands.help();
        logger.on('end',function(data){
            expect(data).to.eql(helpers.require('lib/templates/json/help.json'));
            done();
        });
    });
    it('should return train help if command name is "train"', function(done){
        var logger = commands.help('train');
        logger.on('end',function(data){
            expect(data).to.eql(helpers.require('lib/templates/json/help-train.json'));
            done();
        });
    });
});