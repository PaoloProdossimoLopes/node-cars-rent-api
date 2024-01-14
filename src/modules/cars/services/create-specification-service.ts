import { EspecificationRepository } from "../repositories/specification-repository"

interface CreateSpecificationServiceInput {
  name: string
  description: string
}

type CreateSpecificationServiceOutput = void

export class CreateSpecificationService {
  constructor(
    private readonly specificationRepository: EspecificationRepository
  ) {}

  async execute(input: CreateSpecificationServiceInput): Promise<CreateSpecificationServiceOutput> {
    if (await this.specificationRepository.findByName(input.name))
      throw new Error('Specification already exists')
    await this.specificationRepository.create(input)
  }
}