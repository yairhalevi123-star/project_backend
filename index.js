import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
const absolutePath = path.join(__dirname, "..", "frontend", "index.html");
const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("method : ", req.method);
  console.log("method .url: ", res.url);
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(logger);
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/frontend/index.html");
// });

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const food = req.body.food;
  res.send(`<h1>hello ${name} your liked food is ${food}</h1>`).status(202);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
