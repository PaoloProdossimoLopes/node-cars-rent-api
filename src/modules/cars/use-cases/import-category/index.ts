import { InMemoryCategoriesRepository } from '../../repositories/in-memory-cartegory-repository';
import { CategoriesRepository } from './../../repositories/categories-reopsitory';
import { ImportCategoryController } from "./import-category.controller";
import { ImportCategoryService } from "./import-category.service";

const categoriesRepository = InMemoryCategoriesRepository.getInstance()
const importCategoryService = new ImportCategoryService(categoriesRepository)
export const importCategoryController = new ImportCategoryController(importCategoryService)