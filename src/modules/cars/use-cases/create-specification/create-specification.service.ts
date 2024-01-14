import { EspecificationRepository } from "../../repositories/specification-repository"

interface CreateSpecificationServiceInput {
  name: string,
  description: string
}

export class CreateSpecificationService {
  constructor(private readonly specificationRepository: EspecificationRepository){}
  async execute(input: CreateSpecificationServiceInput) {
    if (await this.specificationRepository.findByName(input.name))
      throw new Error('Category already exists')

    this.specificationRepository.create(input)
  }
}