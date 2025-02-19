const express = require("express");
const app = express();
const port = 7777;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/test", (req, res) => {
  res.send("Hello from the test");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
