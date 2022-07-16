import { Request, Response, Router } from "express"
import { PostController } from "../controllers/PostController"
const route = Router()

route.get('/', (req:Request, res:Response) => (new PostController()).index(req, res))
route.post('/', (req:Request, res:Response) => (new PostController()).store(req, res))
route.put('/', (req:Request, res:Response) => (new PostController()).update(req, res))
route.delete('/', (req:Request, res:Response) => (new PostController()).destroy(req, res))

export default route;