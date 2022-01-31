const { Doctors } = require("../sample-data/doctors-sample-data");
const { Hospitals } = require("../sample-data/hospitals-sample-data");

const mainFunctionForLinkingDoctorsAndHospitalIdsThatAreRelated = () => {
  const doctors = Doctors();
  const hospitals = Hospitals();
  const arrayWithObjectContainingLinkedHospitalAndDoctorIds = [];

  hospitals.forEach((hospital) => {
    const doctorsLinkedToHospitals = extractDoctorsLinkedToHospital(hospital.hospitalKey, doctors);
    const doctorsIds = extractDoctorIdsOfDoctorsLinkedToHospital(doctorsLinkedToHospitals);
    const objectWithLinkedHospitalAndDoctorIds = createObjectWithLinkedDoctorAndHospitalsId(hospital._id, doctorsIds);

    arrayWithObjectContainingLinkedHospitalAndDoctorIds.push(...objectWithLinkedHospitalAndDoctorIds);
  });

  return arrayWithObjectContainingLinkedHospitalAndDoctorIds;
};

const extractDoctorsLinkedToHospital = (hospitalKey, doctors) => {
  const doctorsLinkedToHospital = doctors.filter((doctor) => doctor.hospital === hospitalKey);

  return doctorsLinkedToHospital;
};

const extractDoctorIdsOfDoctorsLinkedToHospital = (doctorsLinkedToHospital) => {
  return doctorsLinkedToHospital.map((doctor) => doctor._id);
};

const createObjectWithLinkedDoctorAndHospitalsId = (hospitalId, arrayWithDoctorIds) => {
  const arrayWithLinkedDoctorAndHospitalIds = [];

  arrayWithDoctorIds.forEach((id) => {
    const objectWithLinkedIds = { hospitalId: hospitalId, doctorId: id };

    arrayWithLinkedDoctorAndHospitalIds.push(objectWithLinkedIds);
  });

  return arrayWithLinkedDoctorAndHospitalIds;
};

const extractHospitalById = (hospitalId) => {
  const sampleHospitals = Hospitals();
  const selectedHospital = sampleHospitals.filter((hospital) => hospital._id === hospitalId);

  return selectedHospital[0];
};

module.exports = { mainFunctionForLinkingDoctorsAndHospitalIdsThatAreRelated, extractHospitalById };
