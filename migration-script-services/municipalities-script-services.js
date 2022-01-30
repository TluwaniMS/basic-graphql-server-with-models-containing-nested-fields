const { Hospitals } = require("../sample-data/hospitals-sample-data");
const { Municipalities } = require("../sample-data/municipalities-sample-data");

const mainFunctionForLinkingHospitalsAndMunicipalityIdsThatAreRelated = () => {
  const hospitals = Hospitals();
  const municipalities = Municipalities();
  const arrayWithObjectContainingLinkedMunicipalityAndHospitalIds = [];

  municipalities.forEach((municipality) => {
    const hospitalsLinkedToMunicipality = extractHospitalsLinkedToMunicipalities(
      municipality.municipalityKey,
      hospitals
    );
    const hospitalIds = extractHospitalIdsOfHospitalsLinkedToMunicipality(hospitalsLinkedToMunicipality);
    const objectWithLinkedMunicipalityAndHospitalIds = createObjectWithLinkedHospitalAndMunicipalityIds(
      municipality._id,
      hospitalIds
    );

    arrayWithObjectContainingLinkedMunicipalityAndHospitalIds.push(...objectWithLinkedMunicipalityAndHospitalIds);
  });

  return arrayWithObjectContainingLinkedMunicipalityAndHospitalIds;
};

const extractHospitalsLinkedToMunicipalities = (municipalityKey, hospitals) => {
  const hospitalsLinkedToMunicipality = hospitals.filter((hospital) => hospital.municipality === municipalityKey);

  return hospitalsLinkedToMunicipality;
};

const extractHospitalIdsOfHospitalsLinkedToMunicipality = (hospitalsLinkedToMunicipality) => {
  return hospitalsLinkedToMunicipality.map((hospital) => hospital._id);
};

const createObjectWithLinkedHospitalAndMunicipalityIds = (municipalityId, arrayWithHospitalIds) => {
  const arrayWithLinkedHospitalAndMunicipalityIds = [];

  arrayWithHospitalIds.forEach((id) => {
    const objectWithLinkedIds = { municipalityId: municipalityId, hospitalId: id };

    arrayWithLinkedHospitalAndMunicipalityIds.push(objectWithLinkedIds);
  });

  return arrayWithLinkedHospitalAndMunicipalityIds;
};

module.exports = {
  mainFunctionForLinkingHospitalsAndMunicipalityIdsThatAreRelated
};
