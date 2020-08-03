'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash'),
  Activity = mongoose.model('Activity'),
  ActivityImage = mongoose.model('ActivityImage'),
  fs = require('fs');

/**
 * Create a Activity
 */
exports.create = function (req, res) {


};

/**
 * Show the current Activity
 */
exports.read = function (req, res) {

};

/**
 * Update a Activity
 */
exports.update = function (req, res) {

};

/**
 * Delete an Activity
 */
exports.delete = function (req, res) {

};

function createActivities() {
  console.log('Create activity');
  var imageData = fs.readFileSync('./modules/core/static/assets/images/empty_earth.png');

  var image = new ActivityImage({
    name: 'Creation',
    description: 'Image on the beginning',
    type: 'image/png',
    data: imageData
  });

  image.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    }
  });

  var imageData_1 = fs.readFileSync('./modules/core/static/assets/images/1st_day.png');
  var image_1 = new ActivityImage({
    name: 'Creation_1stDay',
    description: 'Image for 1st day',
    type: 'image/png',
    data: imageData_1
  });

  image_1.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    }
  });

  var imageData_2 = fs.readFileSync('./modules/core/static/assets/images//2nd_day.png',function(err){
    console.log(err);
  });
  var image_2 = new ActivityImage({
    name: 'Creation_2ndDay',
    description: 'Image for 2nd day',
    type: 'image/png',
    data: imageData_2
  });

  image_2.save(function (err) {
    if (err) {
      console.log(err);
      throw err;
    }
  });

  var activity = new Activity({
    age: [3, 4, 5, 6],
    type: 'Hands-On',
    name: 'Creation Activity Sheet',
    imageArr: [image, imageData_1, imageData_2]
  });

  activity.save(function (err) {
    if (err) {
      console.log(err);
    }
  });

  /*
    var imageData_3 = fs.readFileSync(__dirname + '/static/assets/images/3rd_day.png');
    const image_3 = new ActivityImage({
      name: 'Creation_3rdDay',
      description:'Image for 3rd day',
      type:'image/png',
      data: imageData_3
    });
  
    var imageData_4 = fs.readFileSync(__dirname + '/static/assets/images/4th_day.png');
    const image_4 = new ActivityImage({
      name: 'Creation_4thDay',
      description:'Image for 4th day',
      type:'image/png',
      data: imageData_4
    });
  
    var imageData_5 = fs.readFileSync(__dirname + '/static/assets/images/5th_day.png');
    const image_5 = new ActivityImage({
      name: 'Creation_5thDay',
      description:'Image for 5th day',
      type:'image/png',
      data: imageData_5
    });
  
    var imageData_6 = fs.readFileSync(__dirname + '/static/assets/images/6th_day.png');
    const image_6 = new ActivityImage({
      name: 'Creation_6thDay',
      description:'Image for 6th day',
      type:'image/png',
      data: imageData_6
    });*/

}

function clearActivities() {
  console.log('Delete all activities');
  ActivityImage.deleteMany({ name: '/Creation/' }, function (err) {
    if (err) {
      console.log('Image Delete Error ' + err);
    }
  });
  Activity.deleteMany({ name: 'Creation Activity Sheet' }, function (err) {
    if (err) {
      console.log('Activity Delete Error ' + err);
    }
  });
}

/**
 * List of Activities
 */
exports.list = function (req, res) {
  console.log('Listing saved activities');
  //clearActivities();
  /*createActivities(function(err) {
    if (err) {
      console.log(err);
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }
  });*/
  console.log('Retrieve activities');
  Activity.find({name: 'Creation Activity Sheet'}).exec(function (err, activities) {
    if (err) {
      console.log(err);
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
        res.status(201).json(activities);      
    }
  });
};


