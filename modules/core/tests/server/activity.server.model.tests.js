'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
  mongoose = require('mongoose'),
  Activity = mongoose.model('Activity');

/**
 * Globals
 */
var activity;

/**
 * Unit tests
 */
describe('Activity Model Unit Tests:', function() {
  describe('Saving',function(){
    it('Saves a new activity',function(done){
      var activity = new Activity({
        name:'Creation',
        age:6,
        type:'HandsOn'

      });

      activity.save(function(err,saved){
        should.not.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) { 
    activity.remove().exec();
    done();
});
});
