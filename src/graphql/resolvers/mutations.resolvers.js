/* eslint-disable no-unused-vars */
var gtfs = require('gtfs');
const Agency = require('../../../node_modules/gtfs/models/gtfs/agency');
const FeedInfo = require('../../../node_modules/gtfs/models/gtfs/feed-info');
const Route = require('../../../node_modules/gtfs/models/gtfs/route');
const Shape = require('../../../node_modules/gtfs/models/gtfs/shape');
const StopTime = require('../../../node_modules/gtfs/models/gtfs/stop-time');
const Stop = require('../../../node_modules/gtfs/models/gtfs/stop');
const Transfer = require('../../../node_modules/gtfs/models/gtfs/transfer');
const Frequency = require('../../../node_modules/gtfs/models/gtfs/frequencies');

const mutations_resolvers = {
  Mutation: {
    agency: async (parent, args, ctx, info) => {
      const db_agency = await Agency.findOneAndUpdate(args.agency_key, args);
      return db_agency;
    },
    feed_info: async (parent, args, ctx, info) => {
      const db_feed_info = await FeedInfo.findOneAndUpdate(args.agency_key, args);
      return db_feed_info;
    },
    route: async (parent, args, ctx, info) => {
      const db_route = await Route.findOneAndUpdate(args.agency_key, args);
      return db_route;
    },
    shape: async (parent, args, ctx, info) => {
      const db_shape = await Shape.findOneAndUpdate(args.agency_key, args);
      return db_shape;
    },
    stopTime: async (parent, args, ctx, info) => {
      const db_stopTime = await StopTime.findOneAndUpdate(args.agency_key, args);
      return db_stopTime;
    },
    stop: async (parent, args, ctx, info) => {
      const db_stop = await Stop.findOneAndUpdate(args.agency_key, args);
      return db_stop;
    },
    transfer: async (parent, args, ctx, info) => {
      const db_transfer = await Transfer.findOneAndUpdate(args.agency_key, args);
      return db_transfer;
    },
    frequency: async (parent, args, ctx, info) => {
      const db_frequency = await Frequency.findOneAndUpdate(args.agency_key, args);
      return db_frequency;
    },
  },
};

module.exports = mutations_resolvers
