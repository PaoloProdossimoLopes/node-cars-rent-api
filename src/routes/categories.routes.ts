import { Router } from 'express'
import { InMemoryCategoriesRepository } from '../modules/cars/repositories/in-memory-cartegory-repository';
import { StatusCode } from '../status-code';
import { CreateCategorySerice } from '../modules/cars/services/create-category.service';
import { FindAllCategoriesService } from '../modules/cars/services/find-all-categories.service';

export const categoriesRoutes = Router()
const categoriesRepository = new InMemoryCategoriesRepository()

categoriesRoutes.post('/', (request, response) => {
  try {
    const createCategory = new CreateCategorySerice(categoriesRepository)
    createCategory.execute(request.body)
    return response.status(StatusCode.ok).send()
  } catch (error) {
    const statusCode = StatusCode.conflict
    return response.status(statusCode).json({
      error: 'Error',
      reason: error,
      statusCode: statusCode
    })
  }
})

categoriesRoutes.get('/', (_, response) => {
  try {
    const findAllcategories = new FindAllCategoriesService(categoriesRepository)
    const allCategories = findAllcategories.execute()
    return response.status(StatusCode.ok).json({
      categories: allCategories
    })
  } catch (error) {
    const statusCode = StatusCode.internalServerError
    return response.status(statusCode).json({
      error: "Internal server error",
      reason: error,
      statusCode
    })
  }
})