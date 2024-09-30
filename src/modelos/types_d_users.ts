import { model, Schema } from 'mongoose'

export interface usersInterface {
  id: number
  username: string
  mail: string
  password: string
  comment: string
}
export type UsersInterfacePublicInfo = Pick<usersInterface, 'id' | 'username' | 'comment'>
export type newUserInfo = Omit<usersInterface, 'id'>

export const usersSchema = new Schema<usersInterface>({
  id: Number,
  username: String,
  mail: String,
  password: String,
  comment: String
})

export const usersofDB = model<usersInterface>('user', usersSchema)
