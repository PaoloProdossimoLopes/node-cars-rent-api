import { Specification } from "../model/specification"

export interface CreateEspecification {
  name: string
  description: string
}

export interface EspecificationRepository {
  create(dto: CreateEspecification): Promise<void>
  findByName(name: string): Promise<Specification | null>
}