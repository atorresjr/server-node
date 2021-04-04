import './helpers/dotenv'

import express from 'express'

const app = express()

const port = parseInt(process.env.PORT, 10) || 3000

app.get('/', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const title = process.env.TITLE || 'Server'
  res.send({ msg: process.env.TITLE })
})

app.listen(port)
