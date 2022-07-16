import { Request, Response, Router } from "express"
import { UserController } from "../controllers/UserController"
const route = Router()

route.get('/', (req:Request, res:Response) => (new UserController()).index(req, res))
route.post('/', (req:Request, res:Response) => (new UserController()).store(req, res))
route.put('/', (req:Request, res:Response) => (new UserController()).update(req, res))
route.delete('/', (req:Request, res:Response) => (new UserController()).destroy(req, res))

export default route;