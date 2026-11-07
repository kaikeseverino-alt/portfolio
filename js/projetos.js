const { createElement } =("react");

const projetos =[
    {titulo: "portfolio", descricao: "meu site, com 4 paginas no ar"},
    {titulo: "receitas", descricao: "churrasco em 5 passos, na tabela"},
    {titulo: "treinos", descricao: "os treinos da semana em academia"},
    {titulo: "playlist", descricao: "as musicas que eu mais escuto"}
];
console.log(projetos[0].titulo);

const listaProjetos = document.querySelector("#lista-projetos");
function criarCard(projeto) {
    const card = document.createElement("section");
    card.classList.add("card");
    const titulo = document.createElement("h2");
    titulo.textContent = projeto.titulo;
    const texto = document.createElement("p");
    texto.textContent = projeto.descricao;
    card.appendChild(titulo);
    card.appendChild(texto);
    listaProjetos.appendChild(card);
};
    fetch("projetos.json")
    .then((resposta) => resposta.json ()) 
    .then((projetos) => {
    for (const projeto of projetos){
      criarCard(projeto);  
    }
 });
   