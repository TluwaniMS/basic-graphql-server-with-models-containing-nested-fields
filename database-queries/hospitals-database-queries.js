const { HospitalModel } = require("../data-base-models/HospitalSchema");
const { Hospitals } = require("../sample-data/hospitals-sample-data");
const { extractDoctorById } = require("../migration-script-services/doctors-script-service");
const {
  mainFunctionForLinkingDoctorsAndHospitalIdsThatAreRelated
} = require("../migration-script-services/hospitals-script-services");

const createSampleHospitals = async () => {
  const sampleHospitals = Hospitals();
  await HospitalModel.insertMany(sampleHospitals);
};

const createLinksBetweenHospitalsAndDoctors = async () => {
  const hospitalsAndLinkedDoctorIds = mainFunctionForLinkingDoctorsAndHospitalIdsThatAreRelated();
  hospitalsAndLinkedDoctorIds.forEach(async (link) => {
    const doctor = extractDoctorById(link.doctorId);
    await HospitalModel.updateOne({ _id: link.hospitalId }, { $push: { doctors: doctor } });
  });
};

module.exports = {
  createSampleHospitals,
  createLinksBetweenHospitalsAndDoctors
};
