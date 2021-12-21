const { GraphQLString, GraphQLNonNull } = require("graphql");
const { deleteMunicipalityByMunicipalKey } = require("../services/municipality-services");

const deleteMunicipalityByKeyMutation = {
  type: GraphQLString,
  args: {
    municipalityKey: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return deleteMunicipalityByMunicipalKey(args);
  }
};

module.exports = { deleteMunicipalityByKeyMutation };
