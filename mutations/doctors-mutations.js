const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const { deleteDoctorById } = require("../services/doctor-services");

const deleteDoctorMutation = {
  type: new GraphQLNonNull(GraphQLString),
  args: {
    doctorsId: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve(parent, args) {
    return deleteDoctorById(args);
  }
};

module.exports = { deleteDoctorMutation };
