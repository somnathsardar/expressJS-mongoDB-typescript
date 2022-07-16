import { Request, Response, NextFunction } from "express"

/**
 * @description Authentication middleware.
 * @param req Request - Express request object
 * @param res Response - Express response object
 * @param next NextFunction
 */
const auth = (req:Request, res:Response, next:NextFunction) => {
  // Your code here...
  next()
}

export default auth