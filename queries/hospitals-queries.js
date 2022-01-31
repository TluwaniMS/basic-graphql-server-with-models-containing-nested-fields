const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { HospitalsModel } = require("../graphql-models/hospitals-model");
const { getAllHospitals, getHospital } = require("../services/hospital-services");

const getAllHospitalsQuery = {
  type: new GraphQLList(HospitalsModel),
  resolve(parent, args) {
    return getAllHospitals();
  }
};

const getHospitalByHospitalIdQuery = {
  type: HospitalsModel,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return getHospital(args);
  }
};

module.exports = { getAllHospitalsQuery, getHospitalByHospitalIdQuery };
