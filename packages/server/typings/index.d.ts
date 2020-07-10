import { Request } from 'express'

declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string
    JWT_SECRET: string
    JWT_COOKIE_EXPIRE: string
  }
}

declare module 'express' {
  export interface Request {
    user?: any
  }
}
