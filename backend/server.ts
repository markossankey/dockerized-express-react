import axios from "axios";
import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res, next) => {
  res.send("worked");
});

app.get("/character", async (req, res, next) => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  res.send(data);
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
