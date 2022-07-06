import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    name: "Joe",
  });
});

app.listen(3030, () => {
  console.log("listening");
});
