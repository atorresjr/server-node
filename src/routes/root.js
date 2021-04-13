import { Router } from 'express'

import logger from '../helpers/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.info('Inside the root path')
  // eslint-disable-next-line no-unused-vars
  const title = process.env.TITLE || 'Server'
  res.send({ msg: process.env.TITLE })
})

export default router
