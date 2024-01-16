import { CategoriesRepository } from './../../repositories/categories-reopsitory';
import fs from 'fs'
import csvParse from 'csv-parse'

interface ImportCategory {
  name: string
  description: string
}

export class ImportCategoryService {
  constructor(
    private readonly categoryRepository: CategoriesRepository
  ){}

  loadcategories(file: Express.Multer.File): Promise<ImportCategory[]> {
    return new Promise((resolve, reject) => {
      const categories: ImportCategory[] = []
      const stream = fs.createReadStream(file.path)

      const parseFile = csvParse()
      stream.pipe(parseFile)

      parseFile.on('data', async (line: string[]) => {
        const [name, description] = line
        categories.push({ name, description })
      })
      .on('end', () => resolve(categories))
      .on('error', (error: Error) => reject(error))
    })
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadcategories(file)

    categories.map(async category => {
      const { name, description } = category

      const existCategory = this.categoryRepository.findByName(name)

      if (!existCategory) {
        this.categoryRepository.create({ name, description })
      }
    })
  }
}