import { Container } from "inversify";
import { TYPE } from "./types";
import { Router } from "../app/router";
import { TweetController } from "../app/controllers/tweet.controller";
import { TweetService } from "../app/services/tweet.service";
import { Database } from "../infra/database";

const AppContainer: Container = new Container();
AppContainer.bind(TYPE.Router).to(Router);
AppContainer.bind(TYPE.Database).to(Database);
AppContainer.bind<TweetController>(TYPE.TweetController).to(TweetController);
AppContainer.bind<TweetService>(TYPE.TweetService).to(TweetService);

export { AppContainer }