const { GraphQLString, GraphQLNonNull } = require("graphql");
const { deleteHospitalByHospitalKey } = require("../services/hospital-services");

const deleteHospitalByHositalKeyMutation = {
  type: GraphQLString,
  args: {
    hospitalKey: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return deleteHospitalByHospitalKey(args);
  }
};

module.exports = { deleteHospitalByHositalKeyMutation };
