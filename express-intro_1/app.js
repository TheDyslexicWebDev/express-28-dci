// console.log("hello i am a birdooo");

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! yeahhh blah ffff");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// https://expressjs.com/en/starter/hello-world.html