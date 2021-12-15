const { DoctorsInfo } = require("../sample-data/doctors-info-sample-data");

const deleteDoctorsInfo = (doctorsId) => {
  const selectedDoctorsInfo = DoctorsInfo.filter((info) => info.doctorsId === doctorsId);
  const doctorsInfoIndex = DoctorsInfo.indexOf(selectedDoctorsInfo);
  DoctorsInfo.splice(doctorsInfoIndex, 1);
};

module.exports = { deleteDoctorsInfo };
