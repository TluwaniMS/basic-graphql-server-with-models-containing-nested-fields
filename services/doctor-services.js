const { Doctors } = require("../sample-data/doctors-sample-data");
const { DoctorsInfo } = require("../sample-data/doctors-info-sample-data");

const getAllDoctors = () => Doctors;
const getDoctorById = (args) => Doctors.filter((doctor) => doctor.id === args.id);

const getDoctorsInfoLinkedToDoctor = (doctorsId) => DoctorsInfo.filter((doctor) => doctor.doctorsId === doctorsId);

module.exports = {};
