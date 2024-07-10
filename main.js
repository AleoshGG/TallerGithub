const app = require("express");

const PORT = 3000;

app.listener(PORT, ()=>{
    console.log(`Aplicacion corriendo en http://localhost:${PORT}`);
})