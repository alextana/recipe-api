const PORT = process.env.PORT || 8080

const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const app = express()

app.get('/', (req, res) => {
  res.send('Food api!')
})

app.get('/api/recipes/random', async (req, res) => {
  // get query params
  const { apiKey, take } = req.query

  // if (!apiKey) {
  //   // check api key
  //   res.status(400).send('Missing ApiKey')
  //   return
  // }

  const recipesCount = await prisma.recipe.count()
  const skip = Math.floor(Math.random() * recipesCount)
  const recipes = await prisma.recipe.findMany({
    take: Number(take),
    skip: skip,
  })

  res.json(recipes)
})

app.get('/api/recipe', async (req, res) => {
  // get query params
  const { id } = req.query

  if (!id) {
    res.status(400).send('Missing id')
  }

  const recipe = await prisma.recipe.findFirst({
    where: {
      recipe_id: id,
    },
  })

  res.json(recipe)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})