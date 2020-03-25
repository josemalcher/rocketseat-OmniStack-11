const express = require('express');

const app = express();

app.get('/', (request, response)=> {
    //response.send("Olá Mundo!!");
    response.json({
        evento: "OmniStak 11",
        aluno: "José Malcher Jr."
    })
});

app.listen(3333);
