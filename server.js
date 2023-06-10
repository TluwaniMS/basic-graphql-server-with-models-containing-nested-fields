const { app } = require("./index");
const { connectToDataBase } = require("./data-base-configuration");

const PORT = process.env.PORT | 5002;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});

(async () => {
  await connectToDataBase();
})();
