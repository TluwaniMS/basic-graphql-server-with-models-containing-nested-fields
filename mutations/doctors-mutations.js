const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const { deleteDoctorById } = require("../services/doctor-services");

const deleteDoctorMutation = {
  type: GraphQLString,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return deleteDoctorById(args);
  }
};

module.exports = { deleteDoctorMutation };
