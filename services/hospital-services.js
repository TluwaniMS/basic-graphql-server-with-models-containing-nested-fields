const { HospitalModel } = require("../data-base-models/HospitalSchema");

const getAllHospitals = async () => {
  const hospitals = await HospitalModel.find({}).populate("doctors");


  return hospitals;
};
const getHospital = async (args) => {
  const hospital = await HospitalModel.findOne({ _id: args._id }).populate("doctors");

  return hospital;
};

const deleteHospitalByHospitalId = async (args) => {
  await HospitalModel.deleteOne({ _id: args._id });

  return `operation completed successfully.`;
};

module.exports = {
  getAllHospitals,
  getHospital,
  deleteHospitalByHospitalId
};
