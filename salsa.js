const express = require('express');
const app = express();
const port = 9090;
const host = 'localhost';

const cookPasta = (req, res, next) =>{
    console.log("Cooking pasta");
    next();
};

const cookSauce = (req, res, next) =>{
    console.log("Cooking sauce");
    next();
};

app.get("/orders/pasta-bolognesa",cookPasta, cookSauce, (req,res) =>{
    console.log("Mezclamos la salsa con la pasta");
    res.send("🍝");
});

app.listen(port, () =>{
    console.log(`Servidor ejecutandose en el puerto http://${host}:${port}`)
});