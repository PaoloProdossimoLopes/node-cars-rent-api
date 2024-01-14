import express from 'express'
import { categoriesRoutes, } from './routes/categories.routes'
import { specificationRouter } from './routes/specifications.routes'
import { routes } from './routes/index'

const port = 3333
const app = express()

app.use(express.json())

app.use(routes)

app.listen(port, () => console.log('HTTP server is running on port ' + port))