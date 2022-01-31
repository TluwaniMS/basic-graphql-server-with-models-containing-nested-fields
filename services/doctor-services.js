const { DoctorModel } = require("../data-base-models/DoctorSchema");

const getAllDoctors = async () => {
  const doctors = await DoctorModel.find({});

  return doctors;
};

const getDoctorById = async (args) => {
  const doctor = await DoctorModel.findOne({ _id: args._id });

  return doctor;
};

const deleteDoctorById = async (args) => {
  await DoctorModel.deleteOne({ _id: args._id });

  return `operation completed successfully.`;
};

module.exports = { getAllDoctors, getDoctorById, deleteDoctorById };
