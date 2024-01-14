import { Router } from "express";
import { InMemoryExpecificationRepository } from "../modules/cars/repositories/in-memory-expecification-repository";
import { CreateSpecificationService } from "../modules/cars/services/create-specification-service";

export const specificationRouter = Router()

const specificationRepository = new InMemoryExpecificationRepository()

specificationRouter.post('/', async (request, response) => {
  try {
    const { name, description } = request.body
    const createSpecificationService = new CreateSpecificationService(specificationRepository)
    await createSpecificationService.execute({ name, description })
    return response.status(201).send()
  } catch (error) {
    return response.status(500).json({
      error: "Internal server error",
      reason: error,
      statusCode: 500
    })
  }
})