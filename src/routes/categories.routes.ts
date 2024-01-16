import { StatusCode } from './../status-code';
import { Router } from 'express'
import { createCategoryController } from '../modules/cars/use-cases/create-category/index';
import { listAllCategoriesController } from '../modules/cars/use-cases/list-all-categories/index';
import multer from 'multer';
import { importCategoryController } from '../modules/cars/use-cases/import-category/index';

export const categoriesRoutes = Router()

categoriesRoutes.post('/', createCategoryController.handle)
categoriesRoutes.get('/', listAllCategoriesController.handle)

const upload = multer({
  dest: './temp'
})
categoriesRoutes.post('/import', upload.single('file'), importCategoryController.handle)