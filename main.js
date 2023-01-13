var express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send("Hello World from railway");
});

const PORT = 2000;
app.listen(process.env.PORT || PORT, () => console.log("run server " + PORT));
