import app from "./src/app"

const PORT:any = process.env.PORT ? process.env.PORT : 8000;

app.listen(PORT, () => {
  console.log("Server started at http://localhost:"+PORT)
})