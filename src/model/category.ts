import { v4 as uuidV4 } from 'uuid'

export class Category {
  readonly id? = uuidV4()
  constructor(
    readonly name: string,
    readonly description: string,
    readonly createdAt: Date,
  ){}
}