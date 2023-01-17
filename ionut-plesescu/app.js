const connectDB = require("./db/connect");
const PORT = 5500;
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
require("dotenv").config();
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", tasks);
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server hitted port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();

app.get("*", (req, res) => {
  res.send(`<h1>Page not found. Go to the <a href='/'> index</a></h1>`);
});
