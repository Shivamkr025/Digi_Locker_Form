import { Aadhaar , IDCard  } from "../model/aadhaarAndId.js";


const insertAadhaar = async(req , res) => {

    const { aadhaarNumber } = req.body;
    try {
        const findAahaar = await Aadhaar.findOne({aadhaarNumber})
        if(findAahaar){
            return res.status(400).json({ message: "Aadhaar already exists" });
        }

        const newAadhaar = new Aadhaar({...req.body});

        const savedAadhaar = await newAadhaar.save();
        return res.status(201).json({ message: "Aadhaar inserted successfully", data: savedAadhaar });
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Something went wrong in insertAadhar function"})
        
    }
}

const insertIDCard = async (req, res) => {
    const { idNumber } = req.body;

    try {
        const IDCardData = await IDCard.findOne({ idNumber })

        if (IDCardData) {
            return res.status(400).json({ message: "ID card already exists" });
        }

        const newIDCard = new IDCard({...req.body});

        const savedIDCard = await newIDCard.save();
        return res.status(201).json({ message: "ID card inserted successfully", data: savedIDCard });

    } catch (error) {
        console.error("Error inserting ID card:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};


export {insertAadhaar , insertIDCard}