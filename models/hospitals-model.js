const { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");

const hospitalsModel = new GraphQLObjectType({});

module.exports = { hospitalsModel };
