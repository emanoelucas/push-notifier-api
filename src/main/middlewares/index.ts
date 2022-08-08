import { Express } from "express"
import tokenParser from "./token-parser"
import jsonParserMiddleware from "./json-parser-middleware"

export default (app: Express) => {
  app.use(tokenParser)
  app.use(jsonParserMiddleware)
}
