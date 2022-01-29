const { Hospitals } = require("../sample-data/hospitals-sample-data");

const extractHospitalsLinkedToMunicipalities = () => {
  const sampleHospitals = Hospitals();
  const hospitalsLinkedToMunicipality = sampleHospitals.filter((hospital) => hospital.municipality === municipalityKey);

  return hospitalsLinkedToMunicipality;
};

module.exports = {
  extractHospitalsLinkedToMunicipalities
};
