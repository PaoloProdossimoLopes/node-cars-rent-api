import { Request, Response } from "express";
import { ListAllCategoriesService } from "./list-all-categories.service";
import { StatusCode } from "../../../../status-code";

export class ListAllCategoriesController {
  constructor(private readonly listAllCategoriesService: ListAllCategoriesService){}

  handle(_: Request, response: Response) {
    try {
      const allCategories = this.listAllCategoriesService.execute()
      return response.status(StatusCode.ok).json({
        categories: allCategories
      })
    } catch (error) {
      const statusCode = StatusCode.internalServerError
      return response.status(statusCode).json({
        error: "Internal server error",
        reason: error,
        statusCode
      })
    }
  }
}