const mongoose = require('mongoose');
const subcategorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title : {type : String},
    subtopics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTopics'
      }],
    questionsCount : {type : Number,default : 0}
    
});
module.exports = mongoose.model('Topics', subcategorySchema);