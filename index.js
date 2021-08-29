const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()
const expresshbs = require('express-handlebars')
const { appendFileSync } = require('fs')
const todoRoutes = require('./routes/todos.js')

const hbs = expresshbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')
app.use(todoRoutes)
app.use(express.static(__dirname));

async function start(){ 
    try{        
        app.listen(PORT, () =>{
            console.log("started")
        })
    }
    catch(e){
        console.log(e);
    }
}

start()