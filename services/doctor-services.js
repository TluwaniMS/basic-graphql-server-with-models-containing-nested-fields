const { Doctors } = require("../sample-data/doctors-sample-data");
const { DoctorsInfo } = require("../sample-data/doctors-info-sample-data");
const { deleteDoctorsInfo } = require("./doctors-info-service");

const getAllDoctors = () => Doctors;
const getDoctorById = (args) => Doctors.filter((doctor) => doctor.id === args.doctorsId);

const getDoctorsInfoLinkedToDoctor = (doctorsId) => DoctorsInfo.filter((doctor) => doctor.doctorsId === doctorsId);

const deleteDoctorById = (args) => {
  const selectedDoctor = Doctors.filter((doctor) => doctor.id === args.doctorsId)[0];
  const doctorsIndex = Doctors.indexOf(selectedDoctor);
  deleteDoctorsInfo(args.doctorsId);
  Doctors.splice(doctorsIndex, 1);

  return `operation completed successfully.`;
};

module.exports = { getAllDoctors, getDoctorById, getDoctorsInfoLinkedToDoctor, deleteDoctorById };
