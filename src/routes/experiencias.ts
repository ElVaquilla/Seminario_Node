import express from 'express'
import * as reseñasServices from '../services/reseñasServices'

// import toNewUser from '../extras/utils'

const router = express.Router()

router.get('/', async (_req, res) => {
  const data = await reseñasServices.getEntries.getAll()
  return res.json(data)
})

router.get('/:id', async (req, res) => {
  const data = await reseñasServices.getEntries.findById(req.params.id)
  return res.json(data)
})

router.get('/user/:id', async (req, res) => {
  const data = await reseñasServices.getEntries.findUserById(req.params.id)
  return res.json(data)
})

router.post('/', async (req, res) => {
  const data = await reseñasServices.getEntries.create(req.body)
  return res.json(data)
})

router.put('/:id', async (req, res) => {
  const data = await reseñasServices.getEntries.update(req.params.id, req.body)
  return res.json(data)
})

router.delete('/:id', async (req, res) => {
  const data = await reseñasServices.getEntries.delete(req.params.id)
  return res.json(data)
})

export default router
