/* eslint-disable no-unused-vars */
var gtfs = require('gtfs');
<<<<<<< HEAD

const mutations_resolvers = {
 
}
=======
const Agency = require('../../../node_modules/gtfs/models/gtfs/agency');

const mutations_resolvers = {
  Mutation: {
    agency: async (parent, args, ctx, info) => {
      if (typeof args.agency_new_name === "string") {
        var query = {'agency_key': args.agency_key};
        const db_agency = await Agency.findOneAndUpdate(query, { agency_name: args.agency_new_name });
        return db_agency;
      }
    },
  },
};
>>>>>>> 4bfe24e... First mutation

module.exports = mutations_resolvers
