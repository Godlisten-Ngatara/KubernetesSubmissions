const express = require("express");
const crypto = require("crypto");

const app = express();
const port = process.env.PORT || 3000;

app.get("/current-status", (req, res) => {
  const randomString = crypto.randomUUID();
  const timestamp = new Date().toISOString();

  res.json({
    timestamp,
    randomString,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
