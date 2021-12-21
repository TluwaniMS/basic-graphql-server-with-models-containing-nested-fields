const { DoctorsInfo } = require("../sample-data/doctors-info-sample-data");
const { SupportingContentModel } = require("../supporting-content-model/supporting-content-model");

const deleteDoctorsInfo = (doctorsId) => {
  const selectedDoctorsInfo = DoctorsInfo.filter((info) => info.doctorsId === doctorsId);
  const doctorsInfoIndex = DoctorsInfo.indexOf(selectedDoctorsInfo);
  DoctorsInfo.splice(doctorsInfoIndex, 1);
};

const updateDoctorsHospitalInfo = (hospitalName) => {
  DoctorsInfo.forEach((info) => {
    info.hospital === hospitalName ? (info.hospital = SupportingContentModel.Unassigned) : "";
  });
};
module.exports = { deleteDoctorsInfo, updateDoctorsHospitalInfo };
