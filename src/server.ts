import express, { json } from 'express'
import { categoriesRoutes, categoriesRoutes } from './routes/categories.routes'
import { specificationRouter } from './routes/specifications.routes'

const port = 3333
const app = express()

app.use(express.json())

app.use('/categories', categoriesRoutes)
app.use('/specifications', specificationRouter)

app.listen(port, () => console.log('HTTP server is running on port ' + port))