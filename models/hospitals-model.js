const { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLObjectType } = require("graphql");
const { DoctorsModel } = require("./doctors-model");
const { getDoctorsLinkedToHospital } = require("../services/hospital-services");

const HospitalsModel = new GraphQLObjectType({
  name: "Hospital",
  fields: () => ({
    hospitalName: { type: new GraphQLNonNull(GraphQLString) },
    hospitalKey: { type: new GraphQLNonNull(GraphQLString) },
    municipality: { type: new GraphQLNonNull(GraphQLString) },
    doctors: {
      type: new GraphQLList(DoctorsModel),
      resolve(parent, args) {
        return getDoctorsLinkedToHospital(parent.hospitalKey);
      }
    }
  })
});

module.exports = { HospitalsModel };
