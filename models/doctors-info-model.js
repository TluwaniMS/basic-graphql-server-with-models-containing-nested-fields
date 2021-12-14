const { GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLObjectType } = require("graphql");

const DoctorsInfoModel = new GraphQLObjectType({
  name: "DoctorsInfo",
  fields: () => ({
    doctorsId: { type: new GraphQLNonNull(GraphQLInt) },
    specialty: { type: new GraphQLNonNull(GraphQLString) },
    hospital: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = { DoctorsInfoModel };
