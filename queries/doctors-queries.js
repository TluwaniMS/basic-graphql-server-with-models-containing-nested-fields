const { DoctorsModel } = require("../models/doctors-model");
const { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLNonNull } = require("graphql");
const { getAllDoctors, getDoctorById } = require("../services/doctor-services");

const getAllDoctorsQuery = new GraphQLObjectType({
  type: new GraphQLList(DoctorsModel),
  resolve(parent, args) {
    return getAllDoctors();
  }
});

const getDoctorByIdQuery = new GraphQLObjectType({
  type: DoctorsModel,
  args: {
    doctorsId: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve(parent, args) {
    return getDoctorById(args);
  }
});

module.exports = { getAllDoctorsQuery, getDoctorByIdQuery };
