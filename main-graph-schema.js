const { GraphQLObjectType } = require("graphql");

const Query = new GraphQLObjectType({
  name: "RootQuery",
  fields: {}
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {}
});

module.exports = {};
