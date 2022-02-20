

const mongoose = require('mongoose');
const date = mongoose.Schema({
    year:{
        type:Number,
    },
    month:{
        type:Number,
    },
    day:{
        type:Number,
    }
})
const Event = mongoose.Schema({
    type_zone:{
        type:String
    },
    type_objet:{
        type:String
    },
    ref_objet:{
        type:String
    },
    event:{
        type:String
    },
    titre:{
        type:String
    },
    etat:{
        type:String
    },
    date_debut:{
        type:date
    },
    date_fin:{
        type:date
    },
    image :{
        type:[Object]
    }
})

mongoose.model('Event',Event,'Event');