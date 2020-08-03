'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Image Schema
 */
var ActivityImageSchema = new Schema({
  created:{
    type:Date,
    default:Date.now
  },
  name:{
    type:String
  },
  description:{
    type:String
  },
  type:{
    type:String
  },
  data:{
    data:Buffer,
    contentType:String,
  }
});

/**
 * Activity Schema
 */
var ActivitySchema = new Schema({
  created:{
    type: Date,
    default:Date.now
  },
  age:{
    type:[Number]
  },
  type:{
    type:String
  },
  name:{
    type:String
  },
  imageArr:{
   type:[ActivityImageSchema]
  }
});


mongoose.model('Activity', ActivitySchema);
mongoose.model('ActivityImage', ActivityImageSchema);

