const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { getAllDoctorsQuery, getDoctorByIdQuery } = require("./queries/doctors-queries");
const { getAllHospitalsQuery, getHospitalByHospitalIdQuery } = require("./queries/hospitals-queries");
const { getAllMunicipalitiesQuery, getMunicipalityByIdQuery } = require("./queries/municipalities-queries");

const { deleteDoctorMutation } = require("./mutations/doctors-mutations");
const { deleteHospitalByHositalIdMutation } = require("./mutations/hospitals-mutations");
const { deleteMunicipalityByIdMutation } = require("./mutations/municipalities-mutations");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllDoctors: getAllDoctorsQuery,
    getDoctorById: getDoctorByIdQuery,
    getAllHospitals: getAllHospitalsQuery,
    getHospitalByHospitalById: getHospitalByHospitalIdQuery,
    getAllMunicipalities: getAllMunicipalitiesQuery,
    getMunicipalityByMunicipalityId: getMunicipalityByIdQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteDoctorById: deleteDoctorMutation,
    deleteHospitalById: deleteHospitalByHositalIdMutation,
    deleteMunicipalityByMunicipalId: deleteMunicipalityByIdMutation
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
