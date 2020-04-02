var gtfs = require('gtfs');
const config = require('./../../gtfs/config.json');


const resolvers = {
  Query: {
    routes: async (_, {agency_key, route_id}) => {
      const test_route = await gtfs.getRoutes({
        agency_key: agency_key,
        route_id: route_id
      });
      console.log(test_route);
      return test_route;
      },
  },
  // 3
  route: {
    route_id: (parent) => parent.route_id,
    route_short_name: (parent) => parent.route_short_name,
    route_long_name: (parent) => parent.route_long_name,
    route_desc: (parent) => parent.route_desc,
    route_url: (parent) => parent.route_url,
    route_color: (parent) => parent.route_color,
    route_text_color: (parent) => parent.route_text_color,
    trip_count: (parent) => parent.trip_count,
    pattern_count: (parent) => parent.pattern_count,
  }
}