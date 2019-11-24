import express = require('express')
import { MetricsHandler } from './metric'

const app = express()
const port: string = process.env.PORT || '8080'


app.get('/metrics.json', (req: any, res: any) => {
  MetricsHandler.get((err: Error | null, result?: any) => {
    if (err) {
      throw err
    }
    res.json(result)
  })
})

app.get('/', (req: any, res: any) => {
  res.write('In order to display your name you need to write the path /hello/ + your name and lets see if youre welcome')
  res.end()
})

app.get('/hello', (req: any, res: any) => {
  res.write('ohohoh joyeux noel')
  res.end()
})

app.get('/hello/:name', (req: any, res: any) => {
  res.write('ohohoh vraiment joyeux noel ' + req.params.name)
  res.end()
})

app.listen(port, (err: Error) => {
  if (err) {
    throw err
  }
  console.log(`server is listening on port ${port}`)
})