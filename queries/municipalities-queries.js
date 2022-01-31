const { MunicipalityTC } = require("../data-base-models/MunicipalitySchema");

const MunicipalityQueries = {
  getAllMunicipalities: MunicipalityTC.getResolver("findMany"),
  getMunicipalityById: MunicipalityTC.getResolver("findById")
};

module.exports = { MunicipalityQueries };
