const {Router} = require('express')
const router = Router()
const fs = require('fs')
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({extended: false}));

router.get('/', (req, res) =>{
    res.render('index',{
        title: 'mainPage'
    })
})
router.get('/firstPage', (req, res) =>{
    res.render('firstPage',{
        title: 'firstPage'
    })
})
router.get('/secondPage', (req, res) =>{
    res.render('secondPage',{
        title: 'secondPage'
    })
})
router.post('/firstPage', async(req, res) =>{
    fs.writeFile("css/firstPage.css", "#circle{background-color:"+req.body.circleColor+" !important;}", function(error){
        if(error) throw error; // если возникла ошибка
    })
    res.redirect('/')
})
router.post('/secondPage', async(req, res) =>{
    fs.writeFile("css/secondPage.css", "#square{background-color:"+req.body.squareColor+" !important;}", function(error){
        if(error) throw error;
    })
    res.redirect('/')
})

module.exports = router