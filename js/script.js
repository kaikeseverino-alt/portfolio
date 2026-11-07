console.log("oi! eu sou kaike");

const nome = "kaike";
let hora= new Date() .getHours();
console. log(hora)

let saudacao;
if(hora <=12) {
    saudacao = "bom dia";
} else if (hora <=18) {
    saudacao = "boa tarde"; 
} else {
    saudacao = "boa noite";
    
}
console.log(saudacao);
const titulo = document.querySelector("h1");
titulo.textContent = '${saudacao}, eu sou o ${nome};'

const botao = document.querySelector("#tema");
if (botao){
botao.addEventListener("click" , () => {
    
document.body.classList.toggle("escuro");
if 
(document.body.classList.contains("escuro")){ 
        botao.textContent = "modo claro";
   } else {
        botao.textContent = "modo escuro";
   }
    });
}
const gostos = ["academia","musica","jogos","desenhar","churrasco"];
console.log(gostos.length);
console.log(gostos[0]);
const lista = document.querySelector("#gostos");
if (lista){

for (const gosto of gostos) {
    const item = document.createElement("li");
    item.textContent = gosto;
    lista.appendChild(item);
}
}       

