const { model, Schema } = require("mongoose");

const DoctorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true }
});

const Doctor = model("Doctor", DoctorSchema);

module.exports = { Doctor };
