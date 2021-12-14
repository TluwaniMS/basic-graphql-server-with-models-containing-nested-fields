const { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");
const { HospitalsModel } = require("./hospitals-model");

const MunicipalitiesModel = new GraphQLObjectType({
  name: "Municipality",
  fields: () => ({
    municipalityName: { type: new GraphQLNonNull(GraphQLString) },
    municipalityKey: { type: new GraphQLNonNull(GraphQLString) },
    hospitals: { type: new GraphQLList(HospitalsModel) }
  })
});

module.exports = { MunicipalitiesModel };
