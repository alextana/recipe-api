const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router()

router.get('/', async (req, res) => {
  // get query params
  const { apiKey, take } = req.query

  const recipesCount = await prisma.recipe.count()
  const skip = Math.floor(Math.random() * recipesCount)
  const recipes = await prisma.recipe.findMany({
    take: Number(take),
    skip: skip,
  })

  res.json(recipes)
})

module.exports = router