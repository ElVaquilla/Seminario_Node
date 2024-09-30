import { reseñasofDB } from '../modelos/types_d_reseñas'

export const getEntries = {
  getAll: async () => {
    return await resñasofDB.find()
  },
  findById: async (id: string) => {
    return await reseñasofDB.findById(id)
  },
  findUserById: async (id: string) => {
    return await reseñasofDB.findById(id).populate('user')
  },
  create: async (entry: object) => {
    return await reseñasofDB.create(entry)
  },
  update: async (id: string, body: object) => {
    console.log(body)
    return await reseñasofDB.findByIdAndUpdate(id, body, { $new: true })
  },
  delete: async (id: string) => {
    return await reseñasofDB.findByIdAndDelete(id)
  }
}
