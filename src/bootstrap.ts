import 'reflect-metadata'
import express from "express";
import { TYPE } from "./inversify/types";
import { Router } from "./app/router";
import { AppContainer } from "./inversify/container";
import { config } from "./config/config";
import cors from "cors";

export class Bootstrap {
  start(){
    const app = express();
    const router = AppContainer.get<Router>(TYPE.Router);

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded())

    app.get('/', (_, res) => {
      res.status(200)
      res.json({
        status: "OK"
      })
    })
    app.use('/tweets', router.Tweet())
    
    app.listen(config.PORT, () => console.log(`Tweet API is running on http://localhost:${config.PORT}/`));
  }
}