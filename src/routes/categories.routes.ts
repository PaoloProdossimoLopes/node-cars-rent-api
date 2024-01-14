import { Router, request, response } from 'express'
import { InMemoryCategoriesRepository } from '../modules/cars/repositories/in-memory-cartegory-repository';
import { StatusCode } from '../status-code';
import { CreateCategorySerice } from '../modules/cars/use-cases/create-category/create-category.service';
import { FindAllCategoriesService } from '../modules/cars/services/find-all-categories.service';
import { createCategoryController } from '../modules/cars/use-cases/create-category/index';

export const categoriesRoutes = Router()
const categoriesRepository = new InMemoryCategoriesRepository()

categoriesRoutes.post('/', createCategoryController.handle)

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