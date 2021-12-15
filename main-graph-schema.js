const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { getAllDoctorsQuery, getDoctorByIdQuery } = require("./queries/doctors-queries");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllDoctors: getAllDoctorsQuery,
    getDoctorById: getDoctorByIdQuery
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
