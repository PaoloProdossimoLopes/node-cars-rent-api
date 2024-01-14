import { Request, Response } from "express";
import { StatusCode } from "../../../../status-code";
import { CreateCategoryService } from "./create-category-service";

export class CreateCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService){}
  async handle(request: Request, response: Response) {
    try {
      this.createCategoryService.execute(request.body)
      return response.status(StatusCode.ok).send()
    } catch (error) {
      const statusCode = StatusCode.conflict
      return response.status(statusCode).json({
        error: 'Error',
        reason: error,
        statusCode: statusCode
      })
    }
  }
}