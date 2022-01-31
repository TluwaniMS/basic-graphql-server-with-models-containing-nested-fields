const { connectToDataBase, disconnectDatabase } = require("./data-base-configuration");
const { createSampleDoctors } = require("./database-queries/doctors-database-queries");
const {
  createLinksBetweenHospitalsAndDoctors,
  createSampleHospitals
} = require("./database-queries/hospitals-database-queries");
const {
  createLinksBetweenMunicipalitiesAndHospitals,
  createSampleMunicipalities
} = require("./database-queries/municipalities-database-queries");

(async () => {
  await connectToDataBase();
  await createSampleDoctors();
  await createSampleHospitals();
  await createSampleMunicipalities();
  await createLinksBetweenHospitalsAndDoctors();
  await createLinksBetweenMunicipalitiesAndHospitals();
})().then(() => {
  console.log(`Database population completed successfully...`);
  process.exit();
});
