const { MunicipalityModel } = require("../data-base-models/MunicipalitySchema");
const { Municipalities } = require("../sample-data/municipalities-sample-data");

const createSampleMunicipalities = async () => {
  const sampleMunicipalities = Municipalities();
  await MunicipalityModel.insertMany(sampleMunicipalities);
};

module.exports = { createSampleMunicipalities };
