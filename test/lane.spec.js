
var should = require('chai').should();
var Lane = require('../simulator/lane');


describe('Lane', function(){
    const name = 'Mock Lane';
    let lane = null;

    this.beforeEach('Lane Loader', function(){
        lane = new Lane(name);
    });

    describe('Lane attributes', function(){
        
        it('Should have segments');
        it('Should have traffice source');
        it('Should have traffic sink');
        it('Should have traffic controller');
        it('Should have wait times');
    });
    describe('Simulator', function(){
        it('Should simulate traffic');
        it('Should simulate traffic control');
    });
    describe('Reporting', function(){
        it('Should report average wait time');
        it('Should report per segment wait time');
    });
});