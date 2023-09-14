const express = require('express');
const app = express();
const port = 8080;
const host = 'localhost'

app.get('/', (req,res) =>{
    res.send("Ada School");
});

app.listen(port, () =>{
    console.log(`Servidor ejecutandose en el puerto http://${host}:${port}`)
})