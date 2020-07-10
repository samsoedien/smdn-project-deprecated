import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import mongoSanitize from 'express-mongo-sanitize'
import hpp from 'hpp'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import xss from 'xss-clean'
import cookieparser from 'cookie-parser'

import errorHandler from './middleware/error.middleware'
import authRoutes from './routes/auth.route'
import productRoutes from './routes/products.route'
import userRoutes from './routes/users.route'
import reviewRoutes from './routes/reviews.route'

const app: Application = express()

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
})

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(compression())
app.use(cookieparser())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())
app.use(limiter)

app.get('/', (req: Request, res: Response) => res.send('Rest API Running.'))

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/products', productRoutes)
app.use('/api/v1/reviews', reviewRoutes)

app.use(errorHandler)

export default app
