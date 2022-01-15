const { Mongoose, Schema } = require("mongoose");

const HospitalSchema = new Schema({
  hospitalName: { type: String, required: true },
  hospitalKey: { type: String, required: true }
});
