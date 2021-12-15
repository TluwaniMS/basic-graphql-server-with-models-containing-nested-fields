const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { getAllDoctorsQuery, getDoctorByIdQuery } = require("./queries/doctors-queries");
const { getAllHospitalsQuery, getHospitalByHospitalKeyQuery } = require("./queries/hospitals-queries");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllDoctors: getAllDoctorsQuery,
    getDoctorById: getDoctorByIdQuery,
    getAllHospitals: getAllHospitalsQuery,
    getHospitalByHospitalKey: getHospitalByHospitalKeyQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {}
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
