import { Category } from "../model/category";

interface CreateCategoryData {
  name: string
  description: string
}

export class CategoriesRepository {
  private categories: Category[] = []
  
  create({ name, description }: CreateCategoryData) {
    const category: Category = {
      name,
      description, 
      createdAt: new Date()
    }
    this.categories.push(category)
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