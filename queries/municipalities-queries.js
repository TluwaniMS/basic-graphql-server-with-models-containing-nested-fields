const { GraphQLString, GraphQLList, GraphQLNonNull } = require("graphql");
const { MunicipalitiesModel } = require("../graphql-models/municipalities-model");
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
    _id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return getMunicipality(args);
  }
};

module.exports = { getAllMunicipalitiesQuery, getMunicipalityByMunicipalityKeyQuery };
