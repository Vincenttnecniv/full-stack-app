const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());

app.get("/music/:query/:media", (req, res) => {
  const request = require("request"); //Here is where I get my data for user request.
  let query = req.params.query;
  const media = req.params.media;
  const options = {
    method: "GET",
    url: `https://itunes.apple.com/search?term=${query}&media=${media}`,
    headers: {},
  };
  request(options, function (error, response) {
    //Heres where I send the data to the client-side.
    if (error) throw new Error(error);
    res.send(response.body);
  });
});

app.listen(port, () => {
  //The port I run on is http://localhost:3000/
  console.log(`Example app listening on port ${port}`);
});
