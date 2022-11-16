const { RSA_NO_PADDING } = require('constants')
const express = require('express')
const path = require('path')
const connectDB = require('./config/db');
const Books = require('./models/books');
connectDB();
const app = express()
const port = 4000


// view engine
app.set('view engine','ejs');
app.set('public','public');


app.listen(port)

/* 
    Serve static content from directory "public",
    it will be accessible under path /static, 
    e.g. http://localhost:8080/static/index.html
*/
//app.use('/static', express.static(__dirname + '/public'))
app.use(express.static(path.join(__dirname,'public')))

// parse url-encoded content from body
app.use(express.urlencoded({ extended: false }))

// parse application/json content from body
app.use(express.json())

// serve index.html as content root
app.get('/', function(req, res){

    var options = {
        root: path.join(__dirname, 'public')
    }

    res.sendFile('index.html', options, function(err){
        console.log(err)
    })
})

app.post('/',  (req,res) => {
    try {
        const bool = req.body.bool;
        if (bool === "1"){
            Books.findOne({book_id: req.body.bid},  function (err, result) {
                result.remove();
                console.log("Book Successfully Removed from Favourites");
            })
        }
        else {
            Books.findOne({book_id: req.body.bid}, async function (err, result) {
               if(result){
                   console.log("already in favourites");
               }
               else{
                   const newBook = new Book({
                       title: req.body.title,
                       author_name: req.body.authorname,
                       book_id: req.body.bid
                   })
                   const fav = await newBook.save();
                   res.json(fav);
                   console.log("Favourite Book Successfully added.")
               }

            })

        }
    }catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }  

})

