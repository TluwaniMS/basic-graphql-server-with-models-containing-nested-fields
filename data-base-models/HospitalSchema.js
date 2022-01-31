const { model, Schema } = require("mongoose");
const { composeWithMongoose } = require("graphql-compose-mongoose");

const HospitalSchema = new Schema({
  hospitalName: { type: String, required: true },
  hospitalKey: { type: String, required: true },
  municipality: { type: String, required: true },
  doctors: { type: Schema.Types.ObjectId, ref: "Doctor" }
});

const HospitalModel = model("Hospital", HospitalSchema);

module.exports = { HospitalModel };
