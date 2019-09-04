<<<<<<< HEAD

var should = require('chai').should();
var Lane = require('../simulator/lane');


describe('Lane', function(){
    this.beforeEach('Lane Loader', function(){

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
=======
const Lane = require('../simulator/lane');
const should = require('chai').should();
should;
describe('Lane', function() {
  const name = 'Mock Lane';
  let lane = null;

  this.beforeEach('Lane Loader', function() {
    lane = new Lane(name);
  });

  describe('Lane attributes', function() {
    describe('Name', function() {
      it('Should have a name', function() {
        lane.should.have.property('name');
      });

      it(`Should be equal to ${name}`, function() {
        lane.name.should.equal(name);
      });
    });

    describe('Segments', function() {
      it('Should have segments', function() {
        lane.should.have.property('segments');
      });
    });

    describe('Source', function() {
      it('Should have traffic source', function() {
        lane.should.have.property('source');
      });
    });

    describe('Sink', function() {
      it('Should have traffic sink', function() {
        lane.should.have.property('sink');
      });
    });

    describe('Controller', function() {
      it('Should have traffic controller', function() {
        lane.should.have.property('controller');
      });
    });

    describe('Wait-Time', function() {
      it('Should have wait times', function() {
        lane.should.have.property('waitTimes');
      });
    });
  });

  describe('Simulator', function() {
    it('Should simulate traffic');
    it('Should simulate traffic control');
  });

  describe('Reporting', function() {
    it('Should report average wait time');
    it('Should report per segment wait time');
  });
});
>>>>>>> refs/remotes/origin/master
