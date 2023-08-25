const { Schema, default: mongoose } = require("mongoose");
const STATUS_ENUM = ['Pending', 'Completed'];

const workSchema = new Schema({
    title: String,
    description: {
        type: String,
        required: [true, "Title Required !!"],
    },
    status: {
        type: String,
        enum: STATUS_ENUM,
        default: 'Pending',
    },
    author: String,
    category: String,
    addedDate: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose.ObjectId,
    }
});

export const Work = mongoose.models.work || mongoose.model("work", workSchema)

