import { Specification } from '../model/specification';
import { InMemoryCategoriesRepository } from './in-memory-cartegory-repository';
import { CreateEspecification, EspecificationRepository } from './specification-repository';

export class InMemoryExpecificationRepository implements EspecificationRepository {
  private static INSTANCE: InMemoryExpecificationRepository
  
  private specifications: Specification[] = []
  
  private constructor() {}

  public static getInstance() {
    if (!InMemoryExpecificationRepository.INSTANCE) {
      InMemoryExpecificationRepository.INSTANCE = new InMemoryExpecificationRepository()
    }

    return InMemoryExpecificationRepository.INSTANCE
  }

  async create(dto: CreateEspecification) {
    this.specifications.push(new Specification(dto.name, dto.description, new Date()))
  }

  async findByName(name: string) {
    const specification = this.specifications.find(spec => spec.name === name)
    if (!specification) return null
    return specification 
  }
}