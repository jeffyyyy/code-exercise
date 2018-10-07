const graphql = require('graphql');
const CarService = require('../../../services/CarService');

const Car = new graphql.GraphQLObjectType({
  name: 'car',
  description: 'A Car',
  fields: () => ({
    id: {
      type: graphql.GraphQLID,
      description: 'Unique ID for person. Assigned by DB',
      resolve(car) {
        return car._id; // eslint-disable-line no-underscore-dangle
      },
    },
    modelId: {
      type: graphql.GraphQLID,
      description: 'Model Id',
      resolve(car) {
        return car.id;
      }
    },
    makeId: {
      type: graphql.GraphQLID,
      description: 'Make Id',
    },
    name: {
      type: graphql.GraphQLString,
      description: 'Name',
    },
    price: {
      type: graphql.GraphQLInt,
      description: 'Price',
    },
    imageUrl: {
      type: graphql.GraphQLString,
      description: 'Image Url',
    }
  }),
});

const CarOfWeek = new graphql.GraphQLObjectType({
  name: 'carofweek',
  description: 'Car of week',
  fields: () => ({
    id: {
      type: graphql.GraphQLID,
      resolve(car) {
        return car._id; // eslint-disable-line no-underscore-dangle
      },
    },
    modelId: {
      type: graphql.GraphQLID,
      description: 'Model Id',
      resolve(carofweek) {
        return carofweek.modelId;
      }
    },
    review: {
      type: graphql.GraphQLString,
      description: 'Car Review',
    },
  }),
});

const CarMakes = new graphql.GraphQLObjectType({
  name: 'carmakes',
  description: 'Car Makes',
  fields: () => ({
    id: {
      type: graphql.GraphQLID,
      resolve(makes) {
        return makes._id; // eslint-disable-line no-underscore-dangle
      },
    },
    makeId: {
      type: graphql.GraphQLID,
      description: 'Make Id',
      resolve(makes) {
        return makes.id;
      }
    },
    name: {
      type: graphql.GraphQLString,
      description: 'Car Make Name',
    },
  }),
});

const Query = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'The root query',
  fields: {
    carofweek: {
      type: CarOfWeek,
      description: 'Car of the week',
      resolve() {
        return CarService.findCarOfWeek().then(response => response);
      },
    },
    makes: {
      type: new graphql.GraphQLList(CarMakes),
      description: 'Car of the week',
      resolve() {
        return CarService.findCarMakes().then(response => response);
      },
    },
    car: {
      type: new graphql.GraphQLList(Car),
      description: 'A list of car',
      args: {
        makeId: {
          type: graphql.GraphQLInt,
          defaultValue: 0,
          resolve(car) {
            return car.makeId;
          },
        },
        modelId: {
          type: graphql.GraphQLInt,
          defaultValue: 0,
          resolve(car) {
            return car.id;
          },
        },
      },
      resolve(source, { makeId, modelId }) {
        const queryParameters = {};
        if (makeId) queryParameters.makeId = makeId;
        if (modelId) queryParameters.id = modelId;

        return CarService.find(queryParameters).then(response => response);
      }
    },
  },
});

module.exports = {
  Query,
  Car,
  CarMakes,
  CarOfWeek,
};
