const { DoctorTC } = require("../data-base-models/DoctorSchema");

const DoctorQueries = {
  getAllDoctors: DoctorTC.getResolver("findMany"),
  getDoctorById: DoctorTC.getResolver("findById")
};

module.exports = { DoctorQueries };
