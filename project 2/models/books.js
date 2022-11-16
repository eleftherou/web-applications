const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: {
       type: String,
        required: false
    },
    author_name: {
        type: String,
        required: false
    },
    book_id:{
        type: String,
        required: false
    }
});

module.exports = Book =  mongoose.model('Book', booksSchema);
