import { ObjectId, model, Schema } from 'mongoose'

export interface reseñasInterface {
  id: number
  user: ObjectId
  description: string
}

export const reseñasSchema = new Schema<reseñasInterface>({
  id: Number,
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  description: String
})

export const experienciasofDB = model<reseñasInterface>('reseñas', reseñasSchema)
