const { DoctorModel } = require("../data-base-models/DoctorSchema");
const { Doctors } = require("../sample-data/doctors-sample-data");

const createSampleDoctors = async () => {
  const sampleDoctors = Doctors();
  await DoctorModel.insertMany(sampleDoctors);

  console.log(`sample doctors created successfully...`);
};

const findAllDoctors = async () => {
  const doctors = await DoctorModel.find({});

  return doctors;
};
module.exports = {
  createSampleDoctors,
  findAllDoctors
};
