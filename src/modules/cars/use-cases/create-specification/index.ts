import { InMemoryExpecificationRepository } from "../../repositories/in-memory-expecification-repository";
import { CreateSpecificationController } from "./create-specification.controller";
import { CreateSpecificationService } from "./create-specification.service";

const specificationsRepository = InMemoryExpecificationRepository.getInstance()
const createSpecificationService = new CreateSpecificationService(specificationsRepository)
export const createSpecificationController = new CreateSpecificationController(createSpecificationService)