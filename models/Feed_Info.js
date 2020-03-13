//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var FeedInfoSchema = new Schema({
  feed_publisher_name: String,
  feed_publisher_ur: String,
  feed_lang: String,
  feed_start_date: Date,
  feed_end_date: Date,
  feed_version: String,
  feed_contact_email: String,
  feed_contact_url: String
});

var FeedInfoModel = mongoose.model('FeedInfoModel', FeedInfoSchema );