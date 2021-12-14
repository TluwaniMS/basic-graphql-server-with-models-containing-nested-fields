const { GraphQLInt, GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");

const doctorsModel = new GraphQLObjectType({});

module.exports = { doctorsModel };
