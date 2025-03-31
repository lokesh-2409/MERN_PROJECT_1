import mongoose from 'mongoose'
import validator from 'validator'

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String ,
        required : true ,
        minLength : [3,"First name should contain atleast 3 characters!"],
        maxLength : [30,"First name should not contain more than 30 characters!"]
    },
    lastName:{
        type:String ,
        required : true ,
        minLength : [3,"Last name should contain atleast 3 characters!"],
        maxLength : [30,"Last name should not contain more than 30 characters!"]
    },
    email:{
        type:String ,
        required : true ,
        validate : [validator.isEmail,"Please provide a valid email "],
    },
    phone:{
        type:String ,
        required : true ,
        minLength : [10,"Mobile number should be exactly 10 numbers!!"],
        maxLength : [10,"Mobile number should be exactly 10 numbers!!"],
    },
    time :{
        type : String ,
        required : true,
    },
    date :{
        type  :String ,
        required : true ,
    },

});

export const Reservation = mongoose.model("Reservation",reservationSchema)