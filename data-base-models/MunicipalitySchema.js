const { model, Schema } = require("mongoose");
const { composeWithMongoose } = require("graphql-compose-mongoose");

const MunicipalitySchema = new Schema({
  municipalityName: { type: String, required: true },
  municipalityKey: { type: String, required: true },
  hospitals: { type: Schema.Types.ObjectId, ref: "Hospital" }
});

const MunicipalityModel = model("Municipality", MunicipalitySchema);
const MunicipalityTC = composeWithMongoose("Municipality", MunicipalitySchema);

module.exports = { MunicipalityModel, MunicipalityTC };
