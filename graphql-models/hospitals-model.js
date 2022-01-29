const { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");
const { DoctorsModel } = require("./doctors-model");

const HospitalsModel = new GraphQLObjectType({
  name: "Hospital",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    hospitalName: { type: new GraphQLNonNull(GraphQLString) },
    hospitalKey: { type: new GraphQLNonNull(GraphQLString) },
    municipality: { type: new GraphQLNonNull(GraphQLString) },
    doctors: {
      type: new GraphQLList(DoctorsModel)
    }
  })
});

module.exports = { HospitalsModel };
