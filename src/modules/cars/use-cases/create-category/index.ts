import { InMemoryCategoriesRepository } from '../../repositories/in-memory-cartegory-repository';
import { CreateCategoryService } from './create-category-service';
import { CreateCategoryController } from './create-category.controller';

const categoriesRepository = InMemoryCategoriesRepository.getInstance()
const createCategoryService = new CreateCategoryService(categoriesRepository)
export const createCategoryController = new CreateCategoryController(createCategoryService)