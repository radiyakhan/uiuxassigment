import { type SchemaTypeDefinition } from 'sanity'
import {product} from './product'
import { User } from './user'
import order from './order'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,User,order],
}
