const http = require('http');

const express = require('express');

const aplicacao = express();

const port = 1000

const servidorHttp = http.createServer(aplicacao);

const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket)=>{
    console.log("Um usuário conectou ao Chat");
    socket.addListener('nova mensagem', (msg)=>{
        io.emit('nova mensagem', msg);
    })
})

aplicacao.use(express.static('public'));

servidorHttp.listen(port);

console.log(`O programa está rodando na porta ${port}, então a url é: http://localhost:${port}/`)