const express = require('express')

const calculator = require('./calculator')

const app = express()

app.use(express.json())
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} ${JSON.stringify(req.body)}`)
  next()
})

app.get('/', function (req, res) {
  res.json({
    message: "Calculator is running",
  })
})

app.post('/sum', function (req, res) {
  res.json({
    result: calculator.sum(req.body.a, req.body.b)
  })
})

app.post('/subtract', function (req, res) {
  res.json({
    result: calculator.subtract(req.body.a, req.body.b)
  })
})

app.post('/multiply', function (req, res) {
  res.json({
    result: calculator.multiply(req.body.a, req.body.b)
  })
})

app.post('/divide', function (req, res) {
  res.json({
    result: calculator.divide(req.body.a, req.body.b)
  })
})

const port = process.env.PORT || 3000

app.listen(port)

console.log(`Calculator is running at ${port}`)
