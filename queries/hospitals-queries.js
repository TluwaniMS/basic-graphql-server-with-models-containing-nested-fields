const { GraphQLString, GraphQLList, GraphQLObjectType, GraphQLNonNull } = require("graphql");
const { HospitalsModel } = require("../models/hospitals-model");
const { getAllHospitals, getHospital } = require("../services/hospital-services");

const getAllHospitalsQuery = {
  type: new GraphQLList(HospitalsModel),
  resolve(parent, args) {
    return getAllHospitals();
  }
};

const getHospitalByHospitalKeyQuery = {
  type: HospitalsModel,
  args: {
    hospitalKey: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return getHospital(args);
  }
};

module.exports = { getAllHospitalsQuery, getHospitalByHospitalKeyQuery };
