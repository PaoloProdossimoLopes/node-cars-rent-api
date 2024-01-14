import { CategoriesRepository } from "../../repositories/categories-reopsitory"

interface CreateCategorySericeInput {
  name: string
  description: string
}

type CreateCategorySericeOutput = void

export class CreateCategorySerice {
  constructor(
    private readonly categoriesRepository: CategoriesRepository
  ) {}

  execute(request: CreateCategorySericeInput): CreateCategorySericeOutput {
    const { name, description } = request
    const categoryAlreadyExists = this.categoriesRepository.findByName(name)
    if (categoryAlreadyExists) throw new Error('Category already exist')
    this.categoriesRepository.create({ name, description })
  }
}