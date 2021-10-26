import mongoose from "mongoose";

const doctorMessageSchema = mongoose.Schema({ 

    createdAt: {type: Date, default: new Date()},
    doctorName: String,
    doctorId: String,
    patientName: String,
    patientId: String,
    messageTitle: String,
    messageBody: String,
    
});

const doctorMessage = mongoose.model("doctorMessage", doctorMessageSchema);

export default doctorMessage;