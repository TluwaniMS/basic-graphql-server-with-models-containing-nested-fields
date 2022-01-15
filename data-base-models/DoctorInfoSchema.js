const { Schema, model } = require("mongoose");

const DoctorInfoSchema = new Schema({
  doctorsId: { type: String, required: true },
  specialty: { type: String, required: true },
  hospital: { type: String, required: true }
});

const DoctorInfo = model("DoctorsInfo", DoctorInfoSchema);

module.exports = { DoctorInfo };
