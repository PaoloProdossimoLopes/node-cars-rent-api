import { InMemoryCategoriesRepository } from '../../repositories/in-memory-cartegory-repository';
import { CreateCategoryController } from './create-category.controller';
import { CreateCategorySerice } from "./create-category.service";

const categoriesRepository = new InMemoryCategoriesRepository()
const createCategoryService = new CreateCategorySerice(categoriesRepository)
export const createCategoryController = new CreateCategoryController(createCategoryService)