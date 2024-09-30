import express from 'express'
import userRouter from './routes/user'
import experienciasRouter from './routes/experiencias'
import { connectDB } from './database/mongo_conn'

const app = express()
app.use(express.json())
await connectDB()

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('ping recivido correctamente')
  res.send('pinged')
})

app.use('/api/user', userRouter)
app.use('/api/experiencias', experienciasRouter)
/*

// Ruta para crear usuario

app.post('/users', async (_req, res) => {
  try {
    const user = new User(_req.body)
    await user.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

// Ruta para crear una reseña

app.post('/reseñas', async (_req, res) => {
  try {
    const rese = new Reseña(_req.body)
    await rese.save()
    res.status(201).json(rese)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
})

*/
app.listen(PORT, () => {
  console.log(`El servidor esta escuchando en el puerto  ${PORT}`)
})
