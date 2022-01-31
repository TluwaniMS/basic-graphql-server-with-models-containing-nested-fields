const { GraphQLString, GraphQLNonNull } = require("graphql");
const { deleteHospitalByHospitalId } = require("../services/hospital-services");

const deleteHospitalByHositalIdMutation = {
  type: GraphQLString,
  args: {
    hospitalKey: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return deleteHospitalByHospitalId(args);
  }
};

module.exports = { deleteHospitalByHositalIdMutation };
