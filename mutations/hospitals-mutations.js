const { GraphQLString, GraphQLNonNull } = require("graphql");
const { deleteHospitalByHospitalId } = require("../services/hospital-services");

const deleteHospitalByHositalIdMutation = {
  type: GraphQLString,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return deleteHospitalByHospitalId(args);
  }
};

module.exports = { deleteHospitalByHositalIdMutation };
