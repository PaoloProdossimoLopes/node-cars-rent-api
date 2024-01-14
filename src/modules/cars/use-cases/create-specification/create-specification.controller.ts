import { Request, Response } from "express";
import { CreateSpecificationService } from "./create-specification-service";

export class CreateSpecificationController {
  constructor(private readonly createSpecificationService: CreateSpecificationService){}
  async handle(request: Request, response: Response) {
    try {
      const { name, description } = request.body
      await this.createSpecificationService.execute({ name, description })
      return response.status(201).send()
    } catch (error) {
      return response.status(500).json({
        error: "Internal server error",
        reason: error,
        statusCode: 500
      })
    }
  }
}