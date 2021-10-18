const express = require('express')
const router = express.Router()

const Model = require('../model/data')

const bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.render('home', {})
})

router.post('/routes', urlencodedParser, async (req, res) => {
    const data = new Model({
        name: req.body.name ,
        rollno: req.body.rollno,
        division: req.body.division
    })

    data.save()
})


router.get('/routes', async (req, res) => {
    const data = await Model.find()
    res.json(data)
})





module.exports = router