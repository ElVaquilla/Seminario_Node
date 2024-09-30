import express from 'express'
import * as reseñasServices from '../services/reseñasServices'

// import toNewUser from '../extras/utils'

const router = express.Router()

// Obtener todas las reseñas
router.get('/', async (_req, res) => {
  try {
    const data = await reseñasServices.getEntries.getAll()
    return res.json(data)
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las reseñas' })
  }
})

// Econtrar una reseña por ID
router.get('/:id', async (req, res) => {
  try {
    const data = await reseñasServices.getEntries.findById(req.params.id)
    if (data != null) {
      return res.json(data)
    } else {
      return res.status(404).json({ error: 'No se ha encontrado la reseña' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener la reseña' })
  }
})

// Encontrar reseñas de un usuario por id
router.get('/user/:id', async (req, res) => {
  try {
    const data = await reseñasServices.getEntries.findUserById(req.params.id)
    if (data != null) {
      return res.json(data)
    } else {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el usuario' })
  }
})

// Postear una reseña
router.post('/', async (req, res) => {
  try {
    const data = await reseñasServices.getEntries.create(req.body)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear la reseña' })
  }
})

// Editar una reseña
router.put('/:id', async (req, res) => {
  try {
    const data = await reseñasServices.getEntries.update(req.params.id, req.body)
    if (data != null) {
      return res.json(data)
    } else {
      return res.status(404).json({ error: 'Reseña no encontrada para actualizar' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar la reseña' })
  }
})

// Borrar una reseña
router.delete('/:id', async (req, res) => {
  try {
    const data = await reseñasServices.getEntries.delete(req.params.id)
    if (data != null) {
      return res.json({ message: 'Reseña eliminada con éxito' })
    } else {
      return res.status(404).json({ error: 'Reseña no encontrada para eliminar' })
    }
  } catch (error) {
    return res.status(500).json({ error: 'Error al borrar la reseña' })
  }
})

export default router
