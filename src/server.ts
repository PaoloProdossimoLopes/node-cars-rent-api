import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const port = 3333
const app = express()

app.use('/categories', categoriesRoutes)

app.listen(port, () => console.log('HTTP server is running on port ' + port))