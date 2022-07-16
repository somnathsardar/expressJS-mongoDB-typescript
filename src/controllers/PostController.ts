import { Request, Response } from "express"

export class PostController {

  constructor() {}

  /**
   * @description Retrives records.
   * @param req Request - Express request object
   * @param res Response - Express response object
   */
  public index(req: Request, res: Response) {
    res.send("Post index route")
  }

  /**
   * @description Stores records.
   * @param req Request - Express request object
   * @param res Response - Express response object
   */
  public store(req: Request, res: Response) {
    res.send("Post store route")
  }

  /**
   * @description Updates records.
   * @param req Request - Express request object
   * @param res Response - Express response object
   */
  public update(req: Request, res: Response) {
    res.send("Post update route")
  }

  /**
   * @description Delets records.
   * @param req Request - Express request object
   * @param res Response - Express response object
   */
  public destroy(req: Request, res: Response) {
    res.send("Post delete route")
  }
}