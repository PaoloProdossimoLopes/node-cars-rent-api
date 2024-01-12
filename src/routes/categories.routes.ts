import { Router } from 'express'
import { CategoriesRepository } from '../repositories/cartegory-repository';

export const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body
  categoriesRepository.create({ name, description })
  return response.status(201).send()
})

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.findMany()
  return response.status(200).json({
    categories
  })
}) 