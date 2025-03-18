import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { injectable } from "inversify";

@injectable()
export class Database {
  public prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>

  constructor(){
    const init = new PrismaClient()
    this.prisma = init
  }
}
