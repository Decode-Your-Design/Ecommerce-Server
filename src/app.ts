import { Request, Response } from "express";
import express, { Application } from "express";
import { mongoose } from "@typegoose/typegoose";
import cors from "cors";

import connection from "./database/database";

(async () => {
  const mainRoutes = require("./mainRoutes");

  const app: Application = express();

  app.use(cors({ origin: "*" }));
  app.use(express.json({ limit: "5000mb" }));
  app.use(
    express.urlencoded({
      limit: "5000mb",
      extended: true,
      parameterLimit: 50000000,
    })
  );

  connection()
  app.use("/api", mainRoutes);

  const port = process.env.PORT || 7200;
  try {
    app.listen(port, () =>
      console.log(`API server started at http://localhost:${port}`)
    );
  } catch (err) {
    console.log(err);
  }
})();

// const app = express();
// app.use(cors())
// // below line is important for recieving form  encoded data
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// const port = 8000;

// // get product data
// // app.get('/getAllProducts',getAllProducts)
// app.use("/api", mainRoutes);

// connection();

// const server = app.listen(port, () => {
//     console.log("server started on ", port);
// })

// // add a user
// app.post('/add_user', (req: Request, res: Response) => {
//     const newData = new UserModel({
//         name: req.body.name
//     })
//     var filepath = 'data.txt';
//     fs.writeFile(filepath, req.body.name, (err) => {
//         if (err)
//             console.log("error came")
//         else
//             console.log("data saved")
//     })
// })
