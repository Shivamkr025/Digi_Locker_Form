import mongoose from "mongoose";

const conditionSchema = new mongoose.Schema({
    id: {type: String , require:true},
    rule: {type: String , require:true},
    if_true: {type:String , require:true},
    if_false : {type:String , require:true}
})

const Conditions = mongoose.model('condition', conditionSchema)

export {Conditions}