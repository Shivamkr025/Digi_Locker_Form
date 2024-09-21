import mongoose from "mongoose";

const workflowSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    currentModuleId: {
        type: String,
        required: true,
    },
    completedModules: [
        {
            moduleId: String,
            output: mongoose.Schema.Types.Mixed,
        },
    ],
    status: {
        type: String,
        enum: ['in_progress', 'auto_approved', 'auto_declined'],
        default: 'in_progress',
    },
})

const Workflow = mongoose.model('workflow', workflowSchema)

export {Workflow}