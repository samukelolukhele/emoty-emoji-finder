const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const { EmojiAPI } = require("emoji-api");

const app = express();
const emoji = new EmojiAPI();
const PORT = process.env.PORT;

require('dotenv').config();

app.use(express.json());
app.use(cors());


app.get("/api/:search", async (req, res) => {
  const { search } = req.params;
  
  await emoji
  .get(search)
  .then((result) => res.json(result))
  .catch((err) =>
  res.status(400).json("Error: " + err + " The request: " + search)
  );
});


app.use(express.static(path.join(__dirname, "./client", "/build")));

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client", "/build", "index.html"), () => {
    if (err) return res.status(500).send(err);
  });
});


app.listen(PORT);
