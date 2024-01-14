import { InMemoryExpecificationRepository } from "../../repositories/in-memory-expecification-repository";
import { CreateSpecificationService } from "./create-specification-service";
import { CreateSpecificationController } from "./create-specification.controller";

const specificationsRepository = new InMemoryExpecificationRepository()
const createSpecificationService = new CreateSpecificationService(specificationsRepository)
export const createSpecificationController = new CreateSpecificationController(createSpecificationService)