const { GraphQLString, GraphQLNonNull } = require("graphql");
const { deleteMunicipalityByMunicipalId } = require("../services/municipality-services");

const deleteMunicipalityByIdMutation = {
  type: GraphQLString,
  args: {
    municipalityKey: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return deleteMunicipalityByMunicipalId(args);
  }
};

module.exports = { deleteMunicipalityByIdMutation };
