
/* eslint-disable no-unused-vars */
var gtfs = require('gtfs');
const queries_resolvers = {
  Query: {
    agencies: async (parent, args, ctx, info) => {
      const fetchedagencies = await gtfs.getAgencies(args);
      console.log(fetchedagencies);
      return fetchedagencies;
    },
    feeds_info: async (parent, args, ctx, info) => {
      const fetchedfeeds = await gtfs.getFeedInfo(args);
      console.log(fetchedfeeds);
      return fetchedfeeds;
    },
    routes: async (parent, args, ctx, info) => {
      const fetchedroutes = await gtfs.getRoutes(args);
      console.log(fetchedroutes);
      return fetchedroutes;
      },
    trips: async (parent, args, ctx, info) => {
      const fetchedtrips = await gtfs.getTrips(args);
      console.log(fetchedtrips);
      return fetchedtrips;
      },
    stopTimes: async (parent, args, ctx, info) => {
      const fetchedstoptimes = await gtfs.getRoutes(args);
      console.log(fetchedstoptimes);
      return fetchedstoptimes;
      },
    stops: async (parent, args, ctx, info) => {
      const fetchedstops = await gtfs.getStops(args);
      console.log(fetchedstops);
      return fetchedstops;
      },
  },
  Agency: {
    agency_key: (parent) => parent.agency_key,
    agency_id: (parent) => parent.agency_id,
    agency_name: (parent) => parent.agency_name,
    agency_url: (parent) => parent.agency_url,
    agency_timezone: (parent) => parent.agency_timezone,
    agency_lang: (parent) => parent.agency_lang,
    agency_phone: (parent) => parent.agency_phone,
    routes: async (parent, args, ctx, info) => {
      args.agency_key = parent.agency_key;
      const fetchedroutes = await gtfs.getRoutes(args);
      console.log(fetchedroutes);
      return fetchedroutes;
      }
    },
  Route: {
    route_id: (parent) => parent.route_id,
    agency_id: (parent) => parent.agency_id,
    route_short_name: (parent) => parent.route_short_name,
    route_long_name: (parent) => parent.route_long_name,
    route_desc: (parent) => parent.route_desc,
    route_type:  (parent) => parent.route_type,
    route_url: (parent) => parent.route_url,
    route_color: (parent) => parent.route_color,
    route_text_color: (parent) => parent.route_text_color,
    route_sort_order: (parent) => parent.route_sort_order,
    trips: async (parent, args, ctx, info) => {
      args.agency_key = parent.agency_key;
      args.route_id = parent.route_id;
      const fetchedtrips = await gtfs.getTrips(args);
      console.log(fetchedtrips);
      return fetchedtrips;
    },
  },
  Trip: {
    route_id: (parent) => parent.route_id,
    service_id: (parent) => parent.service_id,
    trip_id: (parent) => parent.trip_id,
    trip_headsign: (parent) => parent.trip_headsign,
    trip_short_name: (parent) => parent.trip_short_name,
    direction_id: (parent) => parent.direction_id,
    block_id: (parent) => parent.block_id,
    shape_id: (parent) => parent.shape_id,
    wheelchair_accessible: (parent) => parent.wheelchair_accessible,
    bikes_allowed: (parent) => parent.bikes_allowed,
    shapes: async (parent, args, ctx, info) => {
      args.agency_key = parent.agency_key;
      args.route_id = parent.route_id;
      args.trip_id = parent.trip_id;
      args.direction_id = parent.direction_id;
      args.service_id = parent.service_id;
      const fetchedshapes = await gtfs.getShapes(args);
      console.log(fetchedshapes);
      return fetchedshapes;
    },
    stop_times: async (parent, args, ctx, info) => {
      args.agency_key = parent.agency_key;
      args.route_id = parent.route_id;
      args.trip_id = parent.trip_id;
      args.direction_id = parent.direction_id;
      const fetchedstoptimes = await gtfs.getStoptimes(args);
      console.log(fetchedstoptimes);
      return fetchedstoptimes;
    },
    frequencies: (parent) => parent.frequencies,
  },
  Shape: {
    shape_id: (parent) => parent.shape_id,
    shape_pt_lat: (parent) => parent.shape_pt_lat,
    shape_pt_lon: (parent) => parent.shape_pt_lon,
    shape_pt_sequence: (parent) => parent.shape_pt_sequence,
    shape_dist_traveled: (parent) => parent.shape_dist_traveled,
  },
  StopTime: {
    trip_id: (parent) => parent.trip_id,
    arrival_time: (parent) => parent.arrival_time,
    departure_time: (parent) => parent.departure_time,
    stop_id: (parent) => parent.stop_id,
    stop_sequence: (parent) => parent.stop_sequence,
    stop_headsign: (parent) => parent.stop_headsign,
    pickup_type: (parent) => parent.pickup_type,
    drop_off_type: (parent) => parent.drop_off_type,
    shape_dist_traveled: (parent) => parent.shape_dist_traveled,
    timepoint: (parent) => parent.timepoint,
    stops: async (parent, args, ctx, info) => {
      args.agency_key = parent.agency_key;
      args.route_id = parent.route_id;
      args.trip_id = parent.trip_id;
      args.direction_id = parent.direction_id;
      const fetchedstops = await gtfs.getStops(args);
      console.log(fetchedstops);
      return fetchedstops;
    },
  },
  Stop: {
    stop_id: (parent) => parent.stop_id,
    stop_code: (parent) => parent.stop_code,
    stop_name: (parent) => parent.stop_name,
    stop_desc: (parent) => parent.stop_desc,
    stop_lat: (parent) => parent.stop_lat,
    stop_lon: (parent) => parent.stop_lon,
    zone_id: (parent) => parent.zone_id,
    stop_url: (parent) => parent.stop_url,
    location_type: (parent) => parent.location_type,
    parent_station: (parent) => parent.parent_station,
    stop_timezone: (parent) => parent.stop_timezone,
    wheelchair_boarding: (parent) => parent.wheelchair_boarding,
    level_id: (parent) => parent.level_id,
    platform_code: (parent) => parent.platform_code,
    transfers: async (parent, args, ctx, info) => {
      args.agency_key = parent.agency_key;
      args.stop_id = parent.stop_id;
      const fetchedtransfers = await gtfs.getTransfers(args);
      console.log(fetchedtransfers);
      return fetchedtransfers;
    },
  },
  Transfer: {
    from_stop_id: (parent) => parent.from_stop_id,
    to_stop_id: (parent) => parent.to_stop_id,
    transfer_type: (parent) => parent.transfer_type,
    min_transfer_time: (parent) => parent.min_transfer_time,
  },
  Frequency: {
    trip_id: (parent) => parent.trip_id,
    start_time: (parent) => parent.start_time,
    end_time: (parent) => parent.end_time,
    headway_secs: (parent) => parent.headway_secs,
    exact_times: (parent) => parent.exact_times,  
  }
}
module.exports = queries_resolvers
