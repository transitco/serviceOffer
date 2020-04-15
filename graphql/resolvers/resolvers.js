var gtfs = require('gtfs');

const resolvers = {
  Query: {
    agencies: async (parent, args, ctx, info) => {
      const fetchedagencies = await gtfs.getAgencies();
      console.log(fetchedagencies);
      return fetchedagencies;
    },
    routes: async (parent, args, ctx, info) => {
      const fetchedroutes = await gtfs.getRoutes({
        agency_key: args.agency_key
      });
      console.log(fetchedroutes);
      return fetchedroutes;
      },
    trips: async (parent, args, ctx, info) => {
      const fetchedtrips = await gtfs.getTrips({
        agency_key: args.agency_key,
        route_id: args.route_id,
      });
      console.log(fetchedtrips);
      return fetchedtrips;
      },
    stopTimes: async (parent, args, ctx, info) => {
      const fetchedstoptimes = await gtfs.getRoutes({
        agency_key: args.agency_key,
        route_id: args.route_id,
        trip_id: args.trip_id
      });
      console.log(fetchedstoptimes);
      return fetchedstoptimes;
      },
    stops: async (parent, args, ctx, info) => {
      const fetchedstops = await gtfs.getStops({
        agency_key: args.agency_key,
        route_id: args.route_id,
        trip_id: args.trip_id,
        stop_times: args.stop_times
      });
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
      const fetchedroutes = await gtfs.getRoutes({
        agency_key: parent.agency_key
      });
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
      const fetchedtrips = await gtfs.getTrips({
        agency_key: parent.agency_key,
        route_id: parent.route_id
      });
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
      const fetchedshapes = await gtfs.getShapes({
        agency_key: parent.agency_key,
        route_id: parent.route_id,
        trip_id: parent.trip_id,
        direction_id: parent.direction_id,
        service_id: parent.service_id,
      });
      console.log(fetchedshapes);
      return fetchedshapes;
    },
    stop_times: async (parent, args, ctx, info) => {
      const fetchedstoptimes = await gtfs.getStoptimes({
        agency_key: parent.agency_key,
        route_id: parent.route_id,
        trip_id: parent.trip_id,
        direction_id: parent.direction_id,
      });
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
      const fetchedstops = await gtfs.getStops({
        agency_key: parent.agency_key,
        route_id: parent.route_id,
        direction_id: parent.direction_id,
        trip_id: parent.trip_id,
      });
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
      const fetchedtransfers = await gtfs.getTransfers({
        agency_key: parent.agency_key,
        from_stop_id: parent.stop_id,
      });
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

module.exports = resolvers
