const { model, Schema } = require("mongoose");

const HospitalSchema = new Schema({
  hospitalName: { type: String, required: true },
  hospitalKey: { type: String, required: true },
  municipality: { type: String, required: true },
  doctors: { type: Schema.Types.ObjectId, ref: "Doctor" }
});

const Hospital = model("Hospital", HospitalSchema);

module.exports = { Hospital };
