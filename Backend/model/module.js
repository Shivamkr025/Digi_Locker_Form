import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
    type: {
        type: String,
        require: true,
        enum: ['document', 'face', 'api', 'dynamicForm'],
    },

    id: { type: String , require:true},
    nextStep: {type: String , require: true},
    varibles: [
        {
            name:String,
            path:String,
            possible_values:[String]
        }
    ],
    properties: {
        documentsSupported: [String],
        url: String ,
        requestParameters: [
            {
                name: String,
                value: String,
                type: String,
            },
        ],
        requestBody : mongoose.Schema.Types.Mixed,
        apiType : {
            type : String,
            enum: ['multipart_post', 'multipart_put', 'json_post', 'json_put', 'json_get'],
        },
        components : [
            {
                type: {
                    type: String,
                    enum: ['label', 'button', 'text', 'date'],
                },
                label: String,
            },
        ],
    }
})

const Module = mongoose.model('module' , moduleSchema)

export {Module}