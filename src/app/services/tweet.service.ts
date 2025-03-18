import { inject, injectable } from "inversify";
import { TYPE } from "../../inversify/types";
import { Database } from "../../infra/database";
import { v4 as uuid } from 'uuid'

export type TTweetDataProps = {
  id?: string;
  fullname: string;
  username: string;
  text: string;
}

@injectable()
export class TweetService {
  constructor(
    @inject(TYPE.Database) private db: Database
  ){}

  async getAllTweet(){
    const tweets = await this.db.prisma.tweets.findMany({
      orderBy: {
        created_at: "desc"
      }
    })
    return tweets
  }

  async getTweetById(props: { id: string; }){
    const tweet = await this.db.prisma.tweets.findUnique({ where: { id: props.id } })
    return tweet
  }

  async createTweet(props: TTweetDataProps){
    const id = uuid()
    await this.db.prisma.tweets.create({
      data: {
        id,
        fullname: props.fullname,
        username: props.username,
        text: props.text
      }
    })
  }

  async editTweet(props: TTweetDataProps){
    await this.db.prisma.tweets.update({
      where: { id: props.id },
      data: {
        fullname: props.fullname,
        username: props.username,
        text: props.text
      }
    })
  }

  async deleteTweet(props: { id: string; }){
    await this.db.prisma.tweets.delete({
      where: { id: props.id }
    })
  }
}