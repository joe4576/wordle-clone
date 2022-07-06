import express from "express";
import cors from "cors";
import fs from "fs";
import { ApiResponse } from "./types/types";

const app = express();
app.use(cors());

let file: Buffer | undefined = undefined;

app.get("/word/:len", async (req, res) => {
  const filteredWordsByLength =
    file
      ?.toString()
      .split("\n")
      .filter((word) => word.length === +req.params.len) ?? [];

  if (filteredWordsByLength.length === 0) {
    res.sendStatus(404);
    return;
  }

  res.send({
    res: filteredWordsByLength[
      Math.floor(Math.random() * filteredWordsByLength.length)
    ],
  } as ApiResponse);
});

app.listen(3030, async () => {
  file = await fs.promises.readFile("./assets/words.txt");
  console.log("listening");
});
