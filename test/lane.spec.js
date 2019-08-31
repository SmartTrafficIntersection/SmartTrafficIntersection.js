
var should = require('chai').should();
var Lane = require('../simulator/lane');


describe('Lane', function(){
    const name = 'Mock Lane';
    let lane = null;

    this.beforeEach('Lane Loader', function(){
        lane = new Lane(name);
    });

    describe('Lane attributes', function(){
        describe('Name', function(){
            it('Should have a name', function(){
                lane.should.have.property('name');
            });
            it(`Should be equal to ${name}`, function(){
                lane.name.should.equal(name);
            })
        });
        describe('Segments', function(){
            it('Should have segments');
        });
        
        describe('Source', function(){
            it('Should have traffic source');
        });
        
        describe('Sink', function(){
            it('Should have traffic sink');
        });
        
        describe('Controller', function(){
            it('Should have traffic controller');
        });
        
        describe('Wait-Time', function(){
            it('Should have wait times');
        });
        
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