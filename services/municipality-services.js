const { MunicipalityModel } = require("../data-base-models/MunicipalitySchema");

const getAllMunicipalities = async () => {
  const municipalities = await MunicipalityModel.find({}).populate("hospitals");

  return municipalities;
};

const getMunicipality = async (args) => {
  const municipality = await MunicipalityModel.findOne({ _id: args._id }).populate("hospitals");

  return municipality;
};

const deleteMunicipalityByMunicipalKey = async (args) => {
  await MunicipalityModel.deleteOne({ _id: args._id });

  return `operation completed successfully.`;
};

module.exports = {
  getAllMunicipalities,
  getMunicipality,
  deleteMunicipalityByMunicipalKey
};
