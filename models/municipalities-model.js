const { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");
const { HospitalsModel } = require("./hospitals-model");
const { getHospitalsLinkedToMunicipality } = require("../services/municipality-services");

const MunicipalitiesModel = new GraphQLObjectType({
  name: "Municipality",
  fields: () => ({
    municipalityName: { type: new GraphQLNonNull(GraphQLString) },
    municipalityKey: { type: new GraphQLNonNull(GraphQLString) },
    hospitals: {
      type: new GraphQLList(HospitalsModel),
      resolve(parent, args) {
        return getHospitalsLinkedToMunicipality(parent.municipalityKey);
      }
    }
  })
});

module.exports = { MunicipalitiesModel };
