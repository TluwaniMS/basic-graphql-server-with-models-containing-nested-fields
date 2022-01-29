const { Schema } = require("mongoose");

const DoctorInfoSchema = new Schema({
  specialty: { type: String, required: true },
  hospital: { type: String, required: true }
});

module.exports = { DoctorInfoSchema };
