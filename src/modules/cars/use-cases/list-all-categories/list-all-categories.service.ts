import { CategoriesRepository } from './../../repositories/categories-reopsitory';
export class ListAllCategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository){}
  execute() {
    const categories = this.categoriesRepository.findMany()
    return {
      categories
    } 
  }
}