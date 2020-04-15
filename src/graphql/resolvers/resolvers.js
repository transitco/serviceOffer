var gtfs = require('gtfs');

const resolvers = {
  Query: {
    routes: async (parent, args, ctx, info) => {
      const fetchedroutes = await gtfs.getRoutes({
        agency_key: args.agency_key
      });
      console.log(fetchedroutes);
      return fetchedroutes;
      },
  },
  route: {
    route_id: (parent) => parent.route_id,
    route_short_name: (parent) => parent.route_short_name,
    route_long_name: (parent) => parent.route_long_name,
    route_desc: (parent) => parent.route_desc,
    route_url: (parent) => parent.route_url,
    route_color: (parent) => parent.route_color,
    route_text_color: (parent) => parent.route_text_color,
    trips: async (parent) => {
      const fetchedtrips = await gtfs.getTrips({
        agency_key: parent.agency_key,
        route_id: parent.route_id
      });
      console.log(fetchedtrips);
      return fetchedtrips;
    },
    trip_count: (parent) => parent.trip_count,
    pattern_count: (parent) => parent.pattern_count,
  },
  trip: {
    trip_id: (parent) => parent.trip_id,
    trip_headsign: (parent) => parent.trip_headsign,
    trip_short_name: (parent) => parent.trip_short_name,
    block_id: (parent) => parent.block_id,
    direction_id: (parent) => parent.direction_id,
    route_id: (parent) => parent.route_id,
    pattern: (parent) => parent.pattern,
    stop_times: async (parent) => {
      const fetchedstoptimes = await gtfs.getStoptimes({
        agency_key: parent.agency_key,
        route_id: parent.route_id
      });
      console.log(fetchedstoptimes);
      return fetchedstoptimes;
    },
    start_time: (parent) => parent.start_time,
    duration: (parent) => parent.duration,
  },
  stopTime: {
    arrival_time: (parent) => parent.arrival_time,
    departure_time: (parent) => parent.departure_time,
    stop_sequence: (parent) => parent.stop_sequence,
    stop_id: (parent) => parent.stop_id,
    stop_headsign: (parent) => parent.stop_headsign,
    shape_dist_traveled: (parent) => parent.shape_dist_traveled,
  }
}

module.exports = resolvers
