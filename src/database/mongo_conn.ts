import { connect, connection } from 'mongoose'
// const mongoose = require ('mongoose')
// import mongoose from 'mongoose';

const connectionURL = 'mongodb://localhost:27017/mibasededatos'

export async function connectDB (): Promise<void> {
  try {
    await connect(connectionURL)
    console.log('Database connected!!')
  } catch (err) {
    console.error('Database connection error: ', err)
  }
}
export function endConn (): Promise<void> | void {
  if (connection.readyState === 1) {
    connection.close()
      .then(() => console.log('Database Closed'))
      .catch((err) => console.error('Error closing connection', err))
  } else { console.log('No active database connection to close') }
};

/*
const usersSchema = new Schema<UsersInterface>({
    id: Number,
    name: String,
    mail: String,
    password: String,
    comment: String
})

const usersofDB = model<UsersInterface>('user',usersSchema) */

/* const user1 = new users({
    id: 6,
    name: 'Gerard',
    mail: 'Derivia',
    password: 'Ignis',
    comment: 'No le caen bien los caballeros'
})
user1.save().then((result)=>{
    console.log(result)
    }) .catch((err)=>{
    console.error(err)
    }); */

/*
usersofDB.find({}).then((result:any)=> {
    run();
    console.log(result)
    connection.close()
})

export default usersofDB; */
