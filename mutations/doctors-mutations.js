const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const { deleteDoctorById } = require("../services/doctor-services");

const deleteDoctorMutation = {
  type: GraphQLString,
  args: {
    doctorsId: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve(parent, args) {
    return deleteDoctorById(args);
  }
};

module.exports = { deleteDoctorMutation };
