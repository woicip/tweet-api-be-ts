import { inject, injectable } from "inversify";
import { TYPE } from "../inversify/types";
import { TweetController } from "./controllers/tweet.controller";
import express from "express";

@injectable()
export class Router {
  constructor(
    @inject(TYPE.TweetController) private TweetController: TweetController
  ){}

  Tweet(){
    const router = express.Router();

    router.route('/')
      .get((req, res, next) => this.TweetController.getTweets(req, res, next))
      .post((req, res, next) => this.TweetController.createTweet(req, res, next))
    
    router.route('/:id')
      .get((req, res, next) => this.TweetController.getTweetById(req, res, next))
      .post((req, res, next) => this.TweetController.editTweet(req, res, next))
      .delete((req, res, next) => this.TweetController.deleteTweet(req, res, next))

    return router;
  }
}