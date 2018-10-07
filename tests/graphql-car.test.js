const graphql = require('graphql');
const carTypes = require('../server/graphql/schemas/car/types');
const chai = require('chai');
const expect = chai.expect;

describe('Car Model Graphql Type', () => {
  it('should have field id and type of graphqlID', () => {
    expect(carTypes.Car.getFields()).to.have.property('id');
    expect(carTypes.Car.getFields().id.type).to.deep.equals(graphql.GraphQLID);
  });

  it('should have field name and type of graphqlString', () => {
    expect(carTypes.Car.getFields()).to.have.property('name');
    expect(carTypes.Car.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });

  it('should have field price and type of graphqlInt', () => {
    expect(carTypes.Car.getFields()).to.have.property('price');
    expect(carTypes.Car.getFields().price.type).to.deep.equals(graphql.GraphQLInt);
  });

  it('should have field imageUrl and type of graphqlString', () => {
    expect(carTypes.Car.getFields()).to.have.property('imageUrl');
    expect(carTypes.Car.getFields().imageUrl.type).to.deep.equals(graphql.GraphQLString);
  });
});

describe('Car Makes Graphql Type', () => {
  it('should have field id and type of graphqlID', () => {
    expect(carTypes.CarMakes.getFields()).to.have.property('id');
    expect(carTypes.CarMakes.getFields().id.type).to.deep.equals(graphql.GraphQLID);
  });

  it('should have field name and type of graphqlString', () => {
    expect(carTypes.CarMakes.getFields()).to.have.property('name');
    expect(carTypes.CarMakes.getFields().name.type).to.deep.equals(graphql.GraphQLString);
  });
});

describe('Car of Week Graphql Type', () => {
  it('should have field id and type of graphqlID', () => {
    expect(carTypes.CarOfWeek.getFields()).to.have.property('id');
    expect(carTypes.CarOfWeek.getFields().id.type).to.deep.equals(graphql.GraphQLID);
  });

  it('should have field modelId and type of graphqlID', () => {
    expect(carTypes.CarOfWeek.getFields()).to.have.property('modelId');
    expect(carTypes.CarOfWeek.getFields().modelId.type).to.deep.equals(graphql.GraphQLID);
  });

  it('should have field review and type of graphqlString', () => {
    expect(carTypes.CarOfWeek.getFields()).to.have.property('review');
    expect(carTypes.CarOfWeek.getFields().review.type).to.deep.equals(graphql.GraphQLString);
  });
});

describe('Car Graphql Query', () => {
  it('Given makeId=50, modelId=520, should resolve a promise and return array length of 1', () => {
    return carTypes.Query.getFields().car.resolve(null, { makeId: 50, modelId: 520 }).then((data) => {
      expect(data.length).to.deep.equals(1);
      expect(data[0]._id).to.equal(520);
    });
  });
  it('Given no parameters, should resolve a promise and return full list of cars with array length of 11', () => {
    return carTypes.Query.getFields().car.resolve(null, {}).then((data) => {
      expect(data.length).to.deep.equals(11);
    });
  });
});
