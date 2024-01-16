import { Request, Response } from "express";
import { ImportCategoryService } from "./import-category.service";

export class ImportCategoryController {
  constructor(
    private readonly importCategoryService: ImportCategoryService
  ){}
  handle(request: Request, response: Response): Response {
    const { file } = request
    this.importCategoryService.execute(file!)
    return response.status(200).send()
  }
}