const { DoctorsModel } = require("../graphql-models/doctors-model");
const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { getAllDoctors, getDoctorById } = require("../services/doctor-services");

const getAllDoctorsQuery = {
  type: new GraphQLList(DoctorsModel),
  resolve(parent, args) {
    return getAllDoctors();
  }
};

const getDoctorByIdQuery = {
  type: DoctorsModel,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return getDoctorById(args);
  }
};

module.exports = { getAllDoctorsQuery, getDoctorByIdQuery };
