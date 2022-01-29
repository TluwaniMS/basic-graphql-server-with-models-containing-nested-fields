const { DoctorModel } = require("../data-base-models/DoctorSchema");
const { Doctors } = require("../sample-data/doctors-sample-data");

const createSampleDoctors = async () => {
  const sampleDoctors = Doctors();
  await DoctorModel.insertMany(sampleDoctors);
};

module.exports = {
  createSampleDoctors
};
