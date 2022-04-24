const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router()

router.get('/', async (req, res) => {
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


module.exports = router