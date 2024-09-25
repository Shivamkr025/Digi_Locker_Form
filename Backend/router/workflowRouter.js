import express from 'express'
import { fetchAadhaarDetails , validateIDCard} from '../controller/validationController.js'

const router = express.Router()

router.post('/fetch/aadhaar' , fetchAadhaarDetails)

router.post('/validate/Idcard' , validateIDCard)

export default router
