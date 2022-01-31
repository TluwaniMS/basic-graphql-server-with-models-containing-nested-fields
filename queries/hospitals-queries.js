const { HospitalTC } = require("../data-base-models/HospitalSchema");

const HospitalQueries = {
  getAllHospitals: HospitalTC.getResolver("findMany"),
  getHospitalById: HospitalTC.getResolver("findById")
};

module.exports = { HospitalQueries };
