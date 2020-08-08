import * as express from "express";
const app = express();
const PORT = 8080;

app.get("/lol", (req, res) => {
  const hello = " Hello World";
  res.send(JSON.stringify(hello));
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
