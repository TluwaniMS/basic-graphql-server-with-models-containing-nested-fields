const { Hospitals } = require("../sample-data/hospitals-sample-data");
const { Doctors } = require("../sample-data/doctors-sample-data");

const getAllHospitals = () => Hospitals;
const getHospital = (args) => Hospitals.filter((hospital) => hospital.hospitalKey === args.hospitalKey);

const getDoctorsLinkedToHospital = (hospitalKey) => Doctors.filter((doctor) => doctor.hospital === hospitalKey);

module.exports = {};
