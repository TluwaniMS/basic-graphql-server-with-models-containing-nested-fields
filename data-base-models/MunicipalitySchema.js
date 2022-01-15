const { model, Schema } = require("mongoose");

const MunicipalitySchema = new Schema({
  municipalityName: { type: String, required: true },
  municipalityKey: { type: String, required: true }
});

const Municipality = model("Municipalities", MunicipalitySchema);
