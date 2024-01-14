import { InMemoryCategoriesRepository } from "../../repositories/in-memory-cartegory-repository";
import { ListAllCategoriesController } from "./list-all-categories.controller";
import { ListAllCategoriesService } from "./list-all-categories.service";

const categoriesRepository = InMemoryCategoriesRepository.getInstance()
const listAllCategoriesService = new ListAllCategoriesService(categoriesRepository)
export const listAllCategoriesController = new ListAllCategoriesController(listAllCategoriesService)