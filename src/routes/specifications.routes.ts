import { Router } from "express";
import { createSpecificationController } from "../modules/cars/use-cases/create-specification/index";

export const specificationRouter = Router()

specificationRouter.post('/', createSpecificationController.handle)