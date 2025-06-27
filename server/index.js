import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//Initialize
const app = express()

//Port
const port = process.env.PORT || 3000

//Midleware
app.use(cors())

//Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
