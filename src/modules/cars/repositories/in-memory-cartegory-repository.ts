import { Category } from "../model/category";
import { CategoriesRepository, CreateCategoryData } from "./categories-reopsitory";

export class InMemoryCategoriesRepository implements CategoriesRepository {
  private categories: Category[] = []
  
  create({ name, description }: CreateCategoryData): Category {
    const category: Category = {
      name,
      description, 
      createdAt: new Date()
    }
    this.categories.push(category)
    return category
  }
  
  findMany(): Category[] {
    return this.categories
  }

  findByName(name: string): Category | null {
    const category = this.categories.find(category => category.name === name)
    if (!category) return null
    return category
  }
}