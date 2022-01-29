const { HospitalModel } = require("../data-base-models/HospitalSchema");
const { Hospitals } = require("../sample-data/hospitals-sample-data");

const createSampleHospitals = async () => {
  const sampleHospitals = Hospitals();
  await HospitalModel.insertMany(sampleHospitals);
};

module.exports = {
  createSampleHospitals
};
