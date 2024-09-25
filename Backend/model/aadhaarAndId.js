import mongoose from "mongoose";

const AadhaarSchema = new mongoose.Schema({
    aadhaarNumber: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    documentType: {  
        type: String,
        required: true
    },
    frontSide: {
        type: String, 
        required: true
    },
    backSide: {
        type: String,  
        required: true
    },
    FrontSideVerified: {
        type: Boolean,
        default: false
    },
    BackSideVerified: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['approved', 'declined'],
        default: 'approved'
    },
    autoApproved: {
        type: Boolean,
        default: false  
    },
    linked: { 
        type: Boolean,
        default: false
    }
});


const IDCardSchema = new mongoose.Schema({
    idNumber: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    documentType: {
        type: String,
        required: true
    },
    frontSide: {
        type: String,
        required: true
    },
    backSide: {
        type: String,
        required: true
    },
    FrontSideVerified: {
        type: Boolean,
        default: false
    },
    BackSideVerified: {
        type: Boolean,
        default: false
    },
    faceMatch: {
        status: { type: String, enum: ['pass', 'fail'], required: true },
        selfieUrl: { type: String, required: true },
        matchScore: { type: Number, required: true }
    },
    AutoApproved: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: ['approved', 'declined'],
        default: 'approved'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});


const IDCard = mongoose.model('IDCard', IDCardSchema);
const Aadhaar = mongoose.model('Aadhaar', AadhaarSchema);

export { IDCard, Aadhaar }
