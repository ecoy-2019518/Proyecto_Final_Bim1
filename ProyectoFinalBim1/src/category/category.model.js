import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

export default mongoose.model('category', categorySchema)