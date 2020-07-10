import { Router } from 'express'

import { protectRoutes, authorizeUser } from '../middleware/auth.middelware'
import * as userController from '../controllers/users.controller'
import advancedQuery from '../middleware/query.middelware'

const UserModel = require('../models/User.model')

const router = Router()

router.get('/', [advancedQuery(UserModel), protectRoutes, authorizeUser('admin')], userController.getUsers)

router.get('/:id', [protectRoutes, authorizeUser('admin')], userController.getUser)

router.put('/:id', [protectRoutes, authorizeUser('admin')], userController.updateUser)

router.delete('/:id', [protectRoutes, authorizeUser('admin')], userController.deleteUser)

export default router
