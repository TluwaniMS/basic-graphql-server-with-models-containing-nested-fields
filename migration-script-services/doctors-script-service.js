const { Doctors } = require("../sample-data/doctors-sample-data");

const extractDoctorById = (doctorId) => {
  const doctors = Doctors();
  const selectedDoctor = doctors.filter((doctor) => doctor._id === doctorId);

  return selectedDoctor[0];
};

module.exports = {
  extractDoctorById
};
