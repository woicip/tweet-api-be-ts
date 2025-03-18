import dotenv from "dotenv"
dotenv.config()

export const config = {
  PORT: process.env.APP_PORT,
}