const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.json({
        message: "Olá"
    });
});

const PORT = 3008;

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Rodando na porta ==== ' + PORT);
})

