const { connect, disconnect } = require("mongoose");

const dataBaseURL = process.env.MONGO_URL || "mongodb://localhost:27017/doctors_directory";
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

async function connectToDataBase() {
  connect(dataBaseURL, connectionOptions)
    .then(() => {
      console.log(`connection to database succesfully created :)!!!`);
    })
    .catch((error) => {
      console.log(`something went wrong ${error.message}`);
    });
}

async function disconnectDatabase() {
  console.log(`Please wait while the database disconnects.`);
  disconnect();
  console.log(`Database has been disconnected successfully...`);
}
module.exports = { connectToDataBase, disconnectDatabase };
