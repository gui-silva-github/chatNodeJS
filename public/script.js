const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

// Pelo click

botaoEnviar.addEventListener("click", ()=>{
    if (caixaMensagem.value !== ""){
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = "";
    }
});

// Input e output dos dados

socket.addEventListener('nova mensagem', (msg)=>{
    const elementoMensagem = document.createElement('li');
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem);
})