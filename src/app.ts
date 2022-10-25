import { Request, Response } from "express";
import express, { Application } from "express";
import { mongoose } from "@typegoose/typegoose";
import cors from "cors";
import "dotenv/config";

import connection from "./database/database";

(async () => {
  const mainRoutes = require("./mainRoutes");

  const app: Application = express();

  app.use(cors());
  app.use(express.urlencoded({extended:false}));
  app.use(express.json({ limit: "5000mb" }));
  app.use(
    express.urlencoded({
      limit: "5000mb",
      extended: true,
      parameterLimit: 50000000,
    })
  );

  // connecting to database 
  connection();

  
  app.use("/api", mainRoutes);

  const port = process.env.PORT || 8000;
  try {
    app.listen(port, () =>
      console.log(`API server started at http://localhost:${port}`)
    );
  } catch (err) {
    console.log(err);
  }
})();

