import express from 'express'
import bodyParser from 'body-parser'
import userRouter from "./routes/userRouter.js";
import forumRouter from "./routes/forumRouter.js";

const app = express()
const port = 3030

app.use(bodyParser.json())

app.use('/', userRouter)
app.use('/', forumRouter)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})