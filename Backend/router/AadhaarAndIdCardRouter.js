import express from 'express'
import { insertAadhaar, insertIDCard } from '../controller/AadhaarAndICCardController.js'

const router = express.Router()

router.post('/add/aadhaar' , insertAadhaar)

router.post('/add/IdCard' , insertIDCard)

export default router