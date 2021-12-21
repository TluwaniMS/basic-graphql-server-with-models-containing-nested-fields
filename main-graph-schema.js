const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { getAllDoctorsQuery, getDoctorByIdQuery } = require("./queries/doctors-queries");
const { getAllHospitalsQuery, getHospitalByHospitalKeyQuery } = require("./queries/hospitals-queries");
const {
  getAllMunicipalitiesQuery,
  getMunicipalityByMunicipalityKeyQuery
} = require("./queries/municipalities-queries");

const { deleteDoctorMutation } = require("./mutations/doctors-mutations");
const { deleteHospitalByHositalKeyMutation } = require("./mutations/hospitals-mutations");
const { deleteMunicipalityByKeyMutation } = require("./mutations/municipalities-mutations");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllDoctors: getAllDoctorsQuery,
    getDoctorById: getDoctorByIdQuery,
    getAllHospitals: getAllHospitalsQuery,
    getHospitalByHospitalKey: getHospitalByHospitalKeyQuery,
    getAllMunicipalities: getAllMunicipalitiesQuery,
    getMunicipalityByMunicipalityKey: getMunicipalityByMunicipalityKeyQuery
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteDoctorById: deleteDoctorMutation,
    deleteHospitalById: deleteHospitalByHositalKeyMutation,
    deleteMunicipalityByMunicipalKey: deleteMunicipalityByKeyMutation
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
