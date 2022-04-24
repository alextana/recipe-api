const PORT = process.env.PORT || 8080

const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const randomRoute = require('./routes/recipes/random/Random')
const singleRecipeRoute = require('./routes/recipe/Recipe')
const searchRoute = require('./routes/recipes/search/Search')

const app = express()

app.get('/', (req, res) => {
  res.send('Food api!')
})

app.use('/api/recipes/random', randomRoute)
app.use('/api/recipe', singleRecipeRoute)
app.use('/api/recipes/search', searchRoute)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
