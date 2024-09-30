import express from 'express'
import * as userServices from '../services/userServices'

// import toNewUser from '../extras/utils'

const router = express.Router()

router.get('/', async (_req, res) => {
  try{
    const data = await userServices.getEntries.getAll()
    if (data) {
      return res.status(200).json(data)
    } else {
      return res.status(404).json({error: 'Error, no se encuentran los usuarios'})
    }
  } catch (error) {
    return res.status(500).json({error: 'Error al obtener la lista de usuarios'})
  }
  
})

router.get('/:id', async (req, res) => {
  try {
    const data = await userServices.getEntries.findById(req.params.id)
    if (data) {
      return res.status(200).json(data)
    } else {
      return res.status(404).json({error: 'Error, no se encuentra al usuario'})
    }
  } catch (error) {
    return res.status(500).json({error: 'Error al obtener al usuario'})
  }
})

router.post('/', async (req, res) => {
  try {
    const data = await userServices.getEntries.create(req.body)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({error: 'Error al crear un usuario'})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const data = await userServices.getEntries.update(req.params.id, req.body)
    if (data) {
      return res.status(200).json(data)
    } else {
      return res.status(404).json({error: 'Error, usuario no encontrado'})
    }
  } catch (error) {
    return res.status(500).json({error: 'Error al modificar un usuario'})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const data = await userServices.getEntries.delete(req.params.id)
    if (data) {
      return res.status(200).json({message: 'Usuario eliminado con éxito'})
    } else {
      return res.status(404).json({error: 'Error, Usuario no encontrado'})
    }
  } catch (error) {
    return res.status(500).json({error: 'Error al borrar un usuario'})
  }
})
  


export default router
