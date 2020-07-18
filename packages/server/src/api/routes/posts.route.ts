import { Router } from 'express'

import * as postController from '../controllers/posts.controller'

const router = Router()

router.get('/', postController.getPosts)

router.get('/:id', postController.getPostById)

router.post('/', postController.postPost)

export default router
