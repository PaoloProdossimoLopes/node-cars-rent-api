import { Category } from "../model/category";

export interface CreateCategoryData {
  name: string
  description: string
}

export interface CategoriesRepository {
  findMany(): Category[]
  create(data: CreateCategoryData): Category
}