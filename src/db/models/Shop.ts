import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    address: {
        type: String,
        require: [true, 'Please add an address']
    },
    tel: {
        type: String,
        require: [true, 'Please add a telephone number']
    },
    open_time: {
        type: Number,
        require: [true, 'Please add a open-time']

    },
    close_time: {
        type: Number,
        require: [true, 'Please add a close-time']
    },
    picture: {
        type: String
    }
});

const Shop = mongoose.models.Shop || mongoose.model("Shop", ShopSchema)
export default Shop