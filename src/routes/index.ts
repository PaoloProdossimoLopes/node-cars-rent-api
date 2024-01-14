import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRouter } from "./specifications.routes";

export const routes = Router()

routes.use('/categories', categoriesRoutes)
routes.use('/specifications', specificationRouter)