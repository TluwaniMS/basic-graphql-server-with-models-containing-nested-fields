const { Municipalities } = require("../sample-data/municipalities-sample-data");
const { Hospitals } = require("../sample-data/hospitals-sample-data");
const { updateHospitalsMunicipalKey } = require("./hospital-services");

const getAllMunicipalities = () => Municipalities;
const getMunicipality = (args) =>
  Municipalities.filter((municipality) => municipality.municipalityKey === args.municipalityKey);

const getHospitalsLinkedToMunicipality = (municipalityKey) =>
  Hospitals.filter((hospital) => hospital.municipality === municipalityKey);

const deleteMunicipalityByMunicipalKey = (args) => {
  const selectedMunicipality = Municipalities.filter(
    (municipality) => municipality.municipalityKey === args.municipalityKey
  )[0];
  const indexOfSelectedMunicipality = Municipalities.indexOf(selectedMunicipality);
  updateHospitalsMunicipalKey(args.municipalityKey);
  Municipalities.splice(indexOfSelectedMunicipality, 1);
};

module.exports = {
  getAllMunicipalities,
  getMunicipality,
  getHospitalsLinkedToMunicipality,
  deleteMunicipalityByMunicipalKey
};
