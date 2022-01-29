const { Doctors } = require("../sample-data/doctors-sample-data");

const extractDoctorsLinkedToHospital = (hospitalKey) => {
  const sampleDoctors = Doctors();
  const doctorsLinkedToHospital = sampleDoctors.filter((doctor) => doctor.hospital === hospitalKey);

  return doctorsLinkedToHospital;
};

module.exports = {
  extractDoctorsLinkedToHospital
};
