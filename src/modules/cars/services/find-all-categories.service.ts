import { Category } from "../model/category";
import { CategoriesRepository } from "../repositories/categories-reopsitory";

type FindAllCategoriesServiceOutput = {
  categories: Category[]
}

export class FindAllCategoriesService {
  constructor(
    private readonly categoriesRepository: CategoriesRepository
  ) {}

  execute(): FindAllCategoriesServiceOutput {
    const categories = this.categoriesRepository.findMany()
    return { categories }
  }
}