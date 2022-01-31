const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { MunicipalitiesModel } = require("../models/municipalities-model");
const { getMunicipality, getAllMunicipalities } = require("../services/municipality-services");

const getAllMunicipalitiesQuery = {
  type: new GraphQLList(MunicipalitiesModel),
  resolve(parent, args) {
    return getAllMunicipalities();
  }
};

const getMunicipalityByMunicipalityKeyQuery = {
  type: MunicipalitiesModel,
  args: {
    municipalityKey: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return getMunicipality(args);
  }
};

module.exports = { getAllMunicipalitiesQuery, getMunicipalityByMunicipalityKeyQuery };
