import { Router } from 'express'

import * as authController from '../controllers/auth.controller'
import { protectRoutes } from '../middleware/auth.middelware'

const router = Router()

router.post('/register', authController.registerUser)

router.post('/login', authController.loginUser)

router.get('/logout', authController.logoutUser)

router.get('/me', [protectRoutes], authController.getMe)

router.put('/updatedetails', protectRoutes, authController.updateUserDetails)

router.put('/updatepassword', protectRoutes, authController.updateUserPassword)

router.post('/forgotpassword', authController.forgotUserPassword)

router.put('/resetpassword/:resettoken', authController.resetUserPassword)

export default router
