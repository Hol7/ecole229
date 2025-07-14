import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send("Jago")
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    
})
