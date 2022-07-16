import express from "express"
import cors from "cors"
import routes from "./routes"
import { allowedOrigins, allowedMethods } from "./config/cors"

const app = express()

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: allowedMethods
};

app.use(cors(options))

app.use(express.json())
app.use(routes)

export default app