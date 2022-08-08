import { Request, Response, NextFunction } from "express"


export default (error: any, req: Request, res: Response, next: NextFunction) => {
  const internalServerErrorStatus = 500
  
  const response = {
    message: error.message,
  }
  
  res.status(error.status || internalServerErrorStatus)
  
  res.send(response)

}