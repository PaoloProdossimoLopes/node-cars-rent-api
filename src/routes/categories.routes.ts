import { Router } from 'express'
import { CategoriesRepository } from '../repositories/cartegory-repository';

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  const categoryAlreadyExists = categoriesRepository.findByName(name)
  if (categoryAlreadyExists)
    return response.status(409).json({
      error: 'Conflict',
      reason: 'this category already exist',
      statusCode: 409
    })
  categoriesRepository.create({ name, description })
  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.findMany()
  return response.status(200).json({
    categories
  })
}) 