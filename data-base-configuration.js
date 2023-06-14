const { connect } = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const databaseHost = process.env.DATABASE_HOST || 'localhost';

const dataBaseURL = `mongodb://${databaseHost}:27017/doctors_directory`;
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

module.exports = { connectToDataBase };
