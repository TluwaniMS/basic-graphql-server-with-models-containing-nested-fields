const { GraphQLString, GraphQLNonNull, GraphQLObjectType } = require("graphql");

const DoctorsInfoModel = new GraphQLObjectType({
  name: "DoctorsInfo",
  fields: () => ({
    specialty: { type: new GraphQLNonNull(GraphQLString) },
    hospital: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = { DoctorsInfoModel };
