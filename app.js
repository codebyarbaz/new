const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(process.env.PORT || 8000, () => {
  console.log("The server is running on PORT 8000");
});
