const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response)=> {
    //response.send("Olá Mundo!!");
    response.json({
        evento: "OmniStak 11",
        aluno: "José Malcher Jr."
    })
});

module.exports = routes;