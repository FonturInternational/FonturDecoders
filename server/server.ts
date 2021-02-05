import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import path from "path";
import { meteoHelix } from "./src/controllers/meteoHelix";
import { meteoWind } from "./src/controllers/meteoWind";
import { meteoRain } from "./src/controllers/meteoRain";

import * as neroNodeDigital from "./src/controllers/neroNode.Digital";
import * as neroNodeTemp from "./src/controllers/neroNode.Temp";
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/neroNodeTemp", (req: Request, res: Response) => {
  console.log("Voltage", neroNodeTemp.voltage(req.body.data.substr(0, 4)));
  console.log("sensor", neroNodeTemp.sensor(req.body.data.substr(4, 2)));
  console.log("Header", neroNodeTemp.headerId(req.body.data.substr(6, 2)));
  console.log("temp", neroNodeTemp.temperature(req.body.data.substr(8, 4)));
  res.sendStatus(200);
});
app.post("/neroNodeDigital", (req: Request, res: Response) => {
  console.log("Voltage", neroNodeDigital.voltage(req.body.data.substr(0, 4)));
  console.log("status", neroNodeDigital.status(req.body.data.substr(4, 2)));
  console.log("Header", neroNodeDigital.headerId(req.body.data.substr(6, 2)));
  res.sendStatus(200);
});
app.post("/meteoHelix", (req: Request, res: Response) => {
  console.log(meteoHelix(req.body.data));
  res.sendStatus(200);
});
app.post("/meteoWind", (req: Request, res: Response) => {
    console.log(meteoWind(req.body.data));
    res.sendStatus(200);
  });
  app.post("/meteoRain", (req: Request, res: Response) => {
    console.log(meteoRain(req.body.data));
    res.sendStatus(200);
  });
app.listen(PORT, () => {
  console.log(
    `🚀🚀  [server]: Server is running at https://localhost:${PORT}  🚀🚀`
  );
});
