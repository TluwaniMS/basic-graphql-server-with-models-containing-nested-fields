const { connectToDataBase } = require("./data-base-configuration");
const { createSampleDoctors, findAllDoctors } = require("./database-queries/doctors-database-queries");
const {
  createLinksBetweenHospitalsAndDoctors,
  createSampleHospitals
} = require("./database-queries/hospitals-database-queries");
const {
  createLinksBetweenMunicipalitiesAndHospitals,
  createSampleMunicipalities
} = require("./database-queries/municipalities-database-queries");

const populateDatabase = async () => {
  await createSampleHospitals();
  await createSampleMunicipalities();
  await createLinksBetweenHospitalsAndDoctors();
  await createLinksBetweenMunicipalitiesAndHospitals();
  await createSampleDoctors();
};

(async () => {
  await connectToDataBase();
  const doctors = await findAllDoctors();

  doctors.length === 0
    ? await populateDatabase()
    : (console.log(`database has already been populated...`), process.exit());
    
})().then(() => {
  console.log(`Database population completed successfully...`);
  process.exit();
});
