import express from 'express'
import { routes } from './routes/index'

import swaggerUI from 'swagger-ui-express'
import swaggerFile from './swagger.json'

import './database'

const port = 3333
const app = express()

app.use(express.json())
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))
app.use(routes)

app.listen(port, () => console.log('HTTP server is running on port ' + port))