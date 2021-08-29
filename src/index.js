import express, { response } from 'express'

const app = express()

app.use(express.json())

/**
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 */

/**
 * Tipos de parâmetros
 *
 * Route Params => Identificar um recurso editar/deletar/buscar
 */

app.get('/courses', (req, res) => {
  const query = req.query
  console.log(query)
  return res.json(['Curso 1', 'Curso 2', 'Curso 3'])
})

app.post('/courses', (req, res) => {
  const body = req.body
  console.log(body)
  return res.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'])
})

app.put('/courses/:id', (req, res) => {
  const params = req.params
  console.log(params)
  return res.json(['Curso 6', 'Curso 2', 'Curso 3', 'Curso 4'])
})

app.patch('/courses/:id', (req, res) => {
  return res.json(['Curso 6', 'Curso 7', 'Curso 3', 'Curso 4'])
})

app.delete('/courses/:id', (req, res) => {
  return res.json(['Curso 7', 'Curso 3', 'Curso 4'])
})

app.listen(3000)
