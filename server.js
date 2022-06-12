const express = require("express");
const path = require("path");

const app = express();

const PORT = 3003;

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
