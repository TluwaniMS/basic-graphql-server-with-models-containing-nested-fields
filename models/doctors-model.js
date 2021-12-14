const { GraphQLInt, GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");
const { DoctorsInfoModel } = require("./doctors-info-model");

const DoctorsModel = new GraphQLObjectType({
  name: "Doctor",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    firstName: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    gender: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    hospital: { type: new GraphQLNonNull(GraphQLString) },
    info: { type: DoctorsInfoModel }
  })
});

module.exports = { DoctorsModel };
