'use strict';
import { graphql } from 'graphql';
import { schema } from '../graphql/schemas/schema.graphql';
const mongoose = require('mongoose');

const dbHandler = require('./db-handler');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await dbHandler.connect();
});

beforeEach(async () => {
    await dbHandler.fillDatabaseWithTestGTFS();
})

/**
 * Clear all test data after every test.
 */
afterEach(async () => {
    await dbHandler.clearDatabase();
});

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await dbHandler.closeDatabase();
});

it('should return the available agency in the GTFS', async () => {
  //language=GraphQL
  const query = `
    query Q {
      agency {
        agency_key
      }
    }
  `;

  const rootValue = {};
  const context = {};

  const result = await graphql(schema, query, rootValue, context);
  const { data } = result;

  expect(data.agency.agency_key).toBe("exo_citso");
});
