import express from 'express'

const app = express()
app.disable('etag')
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/products', (req, res, next) => {
  res.status(200)
    .json({
      products: [
        {
          id: 1,
          name: 'Banana',
          price: 10.0,
          available: 10
        },
        {
          id: 2,
          name: 'Apple',
          price: 20.0,
          available: 15
        },
        {
          id: 3,
          name: 'Orange',
          price: 30.0,
          available: 8
        },
        {
          id: 4,
          name: 'Mango',
          price: 15.0,
          available: 20
        }
      ]
    })
    .end(next)
})

app.get('/vouchers', (req, res, next) => {
  res
    .status(200)
    .json({
      vouchers: [
        {
          id: 1,
          code: '#30OFF',
          type: 'percentual',
          amount: 30.0
        },
        {
          id: 2,
          code: '#100DOLLARS',
          type: 'fixed',
          amount: 100.0
        },
        {
          id: 3,
          code: '#SHIPIT',
          type: 'shipping',
          amount: 0,
          minValue: 300.50
        }]
    }).end(next)
})

app.listen('3020', err => {
  if (err) {
    console.error(err)
    throw err
  }
  console.warn(`> Ready on port 3020...`)
})
