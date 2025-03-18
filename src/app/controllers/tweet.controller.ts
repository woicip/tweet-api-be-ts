import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPE } from "../../inversify/types";
import { TweetService } from "../services/tweet.service";

@injectable()
export class TweetController {
  constructor(
    @inject(TYPE.TweetService) private TweetService: TweetService
  ){};

  async getTweets(req: Request, res: Response, next: NextFunction){
    const data = await this.TweetService.getAllTweet()
    res.status(200)
    res.json({
      status: "OK",
      message: "Successfully get all tweets",
      data: data.map(item => ({
        id: item.id,
        fullname: item.fullname,
        username: item.username,
        text: item.text,
        createdAt: item.created_at
      }))
    })
  }

  async getTweetById(req: Request, res: Response, next: NextFunction){
    const id = req.params.id;
    const data = await this.TweetService.getTweetById({ id })
    res.status(200)
    res.json({
      status: "OK",
      message: "Successfully get detail tweet",
      data: {
        id: data?.id,
        fullname: data?.fullname,
        username: data?.username,
        text: data?.text,
        createdAt: data?.created_at
      }
    })
  }

  async createTweet(req: Request, res: Response, next: NextFunction){
    const payload = {
      fullname: req.body.fullname,
      username: req.body.username,
      text: req.body.text
    }

    await this.TweetService.createTweet(payload)
    
    res.status(200)
    res.json({
      status: "OK",
      message: "Successfully create tweet",
    })
  }

  async editTweet(req: Request, res: Response, next: NextFunction){
    const id = req.params.id
    const payload = {
      fullname: req.body.fullname,
      username: req.body.username,
      text: req.body.text
    }

    await this.TweetService.editTweet({ id, ...payload })

    res.status(200)
    res.json({
      status: "OK",
      message: "Successfully edit tweet",
    })
  }

  async deleteTweet(req: Request, res: Response, next: NextFunction){
    const id = req.params.id
    await this.TweetService.deleteTweet({ id })

    res.status(200)
    res.json({
      status: "OK",
      message: "Successfully delete tweet",
    })
  }
}