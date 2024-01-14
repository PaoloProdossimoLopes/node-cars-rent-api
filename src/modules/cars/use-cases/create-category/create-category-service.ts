import { CategoriesRepository } from "../../repositories/categories-reopsitory";

interface CreatecategoryServiceInput {
  name: string,
  description: string
}

export class CreateCategoryService {
  constructor(private readonly categoriesRepository: CategoriesRepository){}
  async execute(input: CreatecategoryServiceInput) {
    if (this.categoriesRepository.findByName(input.name))
      throw new Error('Category already exists')

    this.categoriesRepository.create(input)
  }
}