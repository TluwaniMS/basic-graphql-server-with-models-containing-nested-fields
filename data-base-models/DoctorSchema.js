const { model, Schema } = require("mongoose");
const { DoctorInfoSchema } = require("./DoctorInfoSchema");

const DoctorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  hospital: { type: String, required: true },
  info: DoctorInfoSchema
});

const Doctor = model("Doctor", DoctorSchema);

module.exports = { Doctor };
