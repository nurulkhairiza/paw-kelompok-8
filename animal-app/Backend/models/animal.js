const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    species : {
        type : String,
        required : true
    },

    age : {
        type : Date,
        required : false,
        default : null
    },

    adopted : {
        type : Boolean,
        required : true,
        default : false
    }

}
//  {
//      collection: 'animals'
//     }
   ,{timestamps : true}

)

module.exports = mongoose.model('Animal', animalSchema)

