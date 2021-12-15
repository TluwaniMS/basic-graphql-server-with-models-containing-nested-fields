const { Municipalities } = require("../sample-data/municipalities-sample-data");
const { Hospitals } = require("../sample-data/hospitals-sample-data");

const getAllMunicipalities = () => Municipalities;
const getMunicipality = (args) =>
  Municipalities.filter((municipality) => municipality.municipalityKey === args.municipalityKey);

const getHospitalsLinkedToMunicipality = (municipalityKey) =>
  Hospitals.filter((hospital) => hospital.municipality === municipalityKey);

module.exports = {};
