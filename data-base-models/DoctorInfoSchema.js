const { Schema, model } = require("mongoose");

const DoctorInfoSchema = new Schema({
  specialty: { type: String, required: true },
  hospital: { type: String, required: true }
});

const DoctorInfo = model("DoctorsInfo", DoctorInfoSchema);
