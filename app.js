// import thirdparty module
const express = require("express");
const fs = require("fs");
const { data1, data2, data3, data4, data5 } = require("./filtersData");
const cari = require("./search");
const Json = fs.readFileSync("asset/data.json");

const app = express();
// port
const port = 3000;
const parseJson = JSON.parse(Json);

// midleware
app.set("view engine", "ejs");
app.use(express.static("asset"));

// routing
app.get("/", (req, res) => {
  res.render("homePage");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/data", (req, res) => {
  const datas = cari(parseJson, req.query.search);
  res.render("tampilanData", { datas });
});
app.get("/data1", (req, res) => {
  res.json(data1(parseJson));
});
app.get("/data2", (req, res) => {
  res.json(data2(parseJson));
});
app.get("/data3", (req, res) => {
  res.json(data3(parseJson));
});
app.get("/data4", (req, res) => {
  res.json(data4(parseJson));
});
app.get("/data5", (req, res) => {
  res.json(data5(parseJson));
});
app.use("/", (req, res) => {
  res.status(404);
  res.render("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
