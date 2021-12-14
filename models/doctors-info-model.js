const { GraphQLInt, GraphQLString, GraphQLNonNull, GraphQLObjectType } = require("graphql");

const doctorsInfoModel = new GraphQLObjectType({});

module.exports = { doctorsInfoModel };
