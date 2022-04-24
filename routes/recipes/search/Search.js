const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const router = express.Router()

router.get('/', async (req, res) => {
  let { searchTerms } = req.query

  if (!searchTerms) {
    return res.status(400).send('Missing search terms')
  }

  let recipes = []

  try {
    // sanitise search terms
    searchTerms = searchTerms.replaceAll(' ', '&')
    recipes = await prisma.recipe.findMany({
      where: {
        ingredients: {
          search: searchTerms,
        }
      },
    })
  } catch (error) {
    console.error(error)
    return res.status(404).send('No recipes found')
  }

  res.json(recipes)
})


module.exports = router