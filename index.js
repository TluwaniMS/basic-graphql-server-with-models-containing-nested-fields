const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./main-graph-schema");
const app = express();

dotenv.config();
app.use(cors());
app.use("/graphql", graphqlHTTP({ schema: schema, graphiql: true }));

module.exports = { app };
