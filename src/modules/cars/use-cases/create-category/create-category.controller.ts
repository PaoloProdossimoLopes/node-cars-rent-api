import { Request, Response } from "express";
import { CreateCategorySerice } from "./create-category.service";
import { StatusCode } from "../../../../status-code";

export class CreateCategoryController {
  constructor(private readonly createCategoryService: CreateCategorySerice){}
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