import { Specification } from '../model/specification';
import { CreateEspecification, EspecificationRepository } from './specification-repository';

export class InMemoryExpecificationRepository implements EspecificationRepository {
  private specifications: Specification[] = []

  async create(dto: CreateEspecification) {
    this.specifications.push(new Specification(dto.name, dto.description, new Date()))
  }

  async findByName(name: string) {
    const specification = this.specifications.find(spec => spec.name === name)
    if (!specification) return null
    return specification 
  }
}