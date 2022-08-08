import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'
import UnauthorizedError from "../../utils/errors/unauthorized-error"

const SECRET = process.env.JWT_SECRET as string
const UNAUTHORIZED_MESSAGE = 'Unauthorized to perform the action'

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization as string

    if (!authorization) 
      throw new UnauthorizedError(UNAUTHORIZED_MESSAGE)

    jwt.verify(authorization, SECRET, (err, decoded) => {
      if (err) 
        throw new UnauthorizedError(err.message)
    })

    next()
  } catch (error) {
    //console.log(error.message)
    next(error)
  }
}