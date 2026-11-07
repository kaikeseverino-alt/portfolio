const formulario = document.querySelector("#formulario");
const resposta = document.querySelector("#resposta");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = document.querySelector("#nome").value;
    const mensagem = document.querySelector("#mensagem").value.trim();

if (mensagem.length <10){
    resposta.textContent = 'Faltam ${10 - mensagem.lenght} letras.';
    resposta.classList.add("erro");
} else {
    resposta.textContent = 'Obrigado, ${nome}!';
    resposta.classList.remove("erro");
    formulario.reset();
    }
});