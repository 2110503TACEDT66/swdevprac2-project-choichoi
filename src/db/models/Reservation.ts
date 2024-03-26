import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        require: true
    },
    shop: {
        type: mongoose.Schema.ObjectId,
        ref: 'Shop',
        require: true
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
});

const Reservation = mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema)
export default Reservation