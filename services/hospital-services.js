const { Hospitals } = require("../sample-data/hospitals-sample-data");
const { Doctors } = require("../sample-data/doctors-sample-data");
const { updateDoctorsHospitalInfo } = require("./doctors-info-service");
const { SupportingContentModel } = require("../supporting-content-model/supporting-content-model");

const getAllHospitals = () => Hospitals;
const getHospital = (args) => Hospitals.filter((hospital) => hospital.hospitalKey === args.hospitalKey)[0];

const getDoctorsLinkedToHospital = (hospitalKey) => Doctors.filter((doctor) => doctor.hospital === hospitalKey);

const deleteHospitalByHospitalKey = (args) => {
  const selecteHospital = Hospitals.filter((hospital) => hospital.hospitalKey === args.hospitalKey)[0];
  const hospitalsIndex = Hospitals.indexOf(selecteHospital);
  updateDoctorsHospitalInfo(selecteHospital.hospitalName);
  Hospitals.splice(hospitalsIndex, 1);

  return `operation completed successfully.`;
};

const updateHospitalsMunicipalKey = (municipalKey) => {
  Hospitals.forEach((hospital) => {
    hospital.municipality === municipalKey ? (hospital.municipality = SupportingContentModel.Unassigned) : "";
  });
};

module.exports = {
  getAllHospitals,
  getHospital,
  getDoctorsLinkedToHospital,
  deleteHospitalByHospitalKey,
  updateHospitalsMunicipalKey
};
