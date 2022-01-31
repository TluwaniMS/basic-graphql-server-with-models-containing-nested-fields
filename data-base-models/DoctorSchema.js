const { model, Schema } = require("mongoose");

const DoctorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  hospital: { type: String, required: true },
  info: {
    specialty: { type: String, required: true },
    hospital: { type: String, required: true }
  }
});

const DoctorModel = model("Doctor", DoctorSchema);

module.exports = { DoctorModel };
