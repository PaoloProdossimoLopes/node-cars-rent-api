import { Router } from 'express'
import { createCategoryController } from '../modules/cars/use-cases/create-category/index';
import { listAllCategoriesController } from '../modules/cars/use-cases/list-all-categories/index';

export const categoriesRoutes = Router()

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get('/', listAllCategoriesController.handle)