const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=> {

    res.send("Hello Express")
})

app.post('/',(req,res)=> {

    res.send(req.body)
})

app.delete('/:id',(req,res)=> {

    const id = req.params.id
    res.send(id)
})

app.patch('/:id/:anotherId',(req,res)=> {

    const data = req.params
    res.send(data)
})

app.listen(3000,()=>{
    console.log("Our Server is Running")
})


