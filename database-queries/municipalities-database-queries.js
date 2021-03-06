const { MunicipalityModel } = require("../data-base-models/MunicipalitySchema");
const { Municipalities } = require("../sample-data/municipalities-sample-data");
const {
  mainFunctionForLinkingHospitalsAndMunicipalityIdsThatAreRelated
} = require("../migration-script-services/municipalities-script-services");
const { extractHospitalById } = require("../migration-script-services/hospitals-script-services");

const createSampleMunicipalities = async () => {
  const sampleMunicipalities = Municipalities();
  await MunicipalityModel.insertMany(sampleMunicipalities);

  console.log(`sample municipalities created successfully...`);
};

const createLinksBetweenMunicipalitiesAndHospitals = async () => {
  const municipalitiesAndLinkedHospitalIds = mainFunctionForLinkingHospitalsAndMunicipalityIdsThatAreRelated();
  municipalitiesAndLinkedHospitalIds.forEach(async (link) => {
    const hospital = extractHospitalById(link.hospitalId);
    await MunicipalityModel.updateOne({ _id: link.municipalityId }, { $push: { hospitals: hospital } });
  });

  console.log(`municipality and hospitals relationship links created successfully...`);
};

module.exports = { createSampleMunicipalities, createLinksBetweenMunicipalitiesAndHospitals };
