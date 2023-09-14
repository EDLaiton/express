const express = require('express');
const app = express();
const port = 6060;


const insertKey = (req, res, next) =>{
    console.log("Insertando llave");
    next();
};

const rotateKey = (req, res, next) =>{
    console.log("Girando llave");
    next();
};

const openDoor = (req, res, next) =>{
    console.log("Abriendo la puerta");
    next();
};

app.get("/door/opened", insertKey, rotateKey, openDoor, (req,res) =>{
    console.log("La puerta ha sido abierta, ya puedes ingresar")
    res.send("Puerta Abierta")
})


app.listen(port, () =>{
    console.log(`El servidor se está ejecutando`)
});