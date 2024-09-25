import { Aadhaar , IDCard } from "../model/aadhaarAndId.js";


const fetchAadhaarDetails = async (req, res) => {
    const { mobileNumber } = req.body;
    console.log(mobileNumber);
    
    try {
        const aadhaarData = await Aadhaar.findOne({ mobileNumber });
        console.log(aadhaarData);
        

        if (!aadhaarData) {
            return res.status(404).json({ message: 'Aadhaar not found' });
        }

        if (aadhaarData.status === "approved" && aadhaarData.linked === true ) {
            return res.status(200).json({ message: 'Auto Approved' , aadhaar : aadhaarData});
        } else {
            return res.status(200).json({url : '/validate/Idcard'});
        }
    } catch (error) {
        return res.status(500).json({ message: 'Server Error' });
    }
};


const validateIDCard = async (req, res) => {
    const { mobileNumber } = req.body; 
    console.log(mobileNumber);    
    try {
        const idCardData = await IDCard.findOne({ mobileNumber });

        if (!idCardData) {
            return res.status(404).json({ message: 'ID Card not found' });
        }

        if (idCardData.faceMatch && idCardData.faceMatch.status === 'pass' && idCardData.faceMatch.matchScore >= 90) {
            
            if (idCardData.status === 'approved') {
                return res.status(200).json({ message: 'ID Card Approved', data: idCardData });
            } else {
                return res.status(400).json({ message: 'ID Card Declined' });
            }

        } else {
            return res.status(400).json({ message: 'Face Match Failed or Low Match Score', faceMatch: idCardData.faceMatch });
        }

    } catch (error) {
        return res.status(500).json({ message: 'Server Error' });
    }
};




export {fetchAadhaarDetails , validateIDCard }