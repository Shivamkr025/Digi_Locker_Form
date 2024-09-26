import express from 'express'
import { getAadhaar, getIDCard, insertAadhaar, insertIDCard } from '../controller/AadhaarAndICCardController.js'

const router = express.Router()

router.post('/add/aadhaar' , insertAadhaar)

router.post('/add/IdCard' , insertIDCard)

router.get('/get/Aadhaar' , getAadhaar)

router.get('/get/IDCard', getIDCard)

export default router