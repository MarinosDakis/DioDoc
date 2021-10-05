// adapted from: https://stackoverflow.com/questions/19695058/how-to-define-object-in-array-in-mongoose-schema-correctly-with-2d-geo-index, https://mongoosejs.com/docs/guide.html

import mongoose from "mongoose";

const patientSchema = mongoose.Schema({ 

    patientBasicInfo: {

        ssn: String,
        fullName: String,
        dob: Date,
        sex: String,
        maritalStatus: String,
        address: String,
        city: String,
        state: String,
        zip: String,
        phone: String,
        employerName: String,
        Occupation: String,
        selectedFile: String,

    },

    patientMedicalHistory: {

        diseases: [String],
        medication: [{medicationName: String, medicationDosage: String, medicationFrequency: String, default: [{}]}],
        allergies: [String],
        familyHistory: [String],
        socialHistory: [{smoke: Boolean, drink: Boolean, weight: String, height: String }],

    },

    createdAt: {type: Date, default: new Date()},
    
});

const postPatientInfo = mongoose.model("postPatientInfo", patientSchema);

export default postPatientInfo;