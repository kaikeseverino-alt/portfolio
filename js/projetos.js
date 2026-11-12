

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

const contagem = document.querySelector("#contagem");
let todos = [];

const mostrar = (lista) => {
  listaProjetos.innerHTML = "";
  for (const projeto of lista) {
    criarCard(projeto);
  }
  const titulos = lista.map((projeto) => projeto.titulo);
  contagem.textContent = `${lista.length} projetos: ${titulos.join(", ")}`;
};

const filtrar = (categoria) => {
  const lista = todos.filter((projeto) => projeto.categoria === categoria);
  mostrar(lista);
};

fetch("projetos.json")
  .then((resposta) => resposta.json())
  .then((projetos) => {
    todos = projetos;
    mostrar(todos);
  });
 const botaoTodos = document.querySelector("#filtro-todos");
 const botaoPessoal = document.querySelector("#filtro-pessoal");
 const botaoFigma= document.querySelector("#filtro-figma");
 
botaoTodos.addEventListener("click", () => mostrar(todos));
botaoPessoal.addEventListener("click", () => filtrar("pessoal"));
botaoFigma.addEventListener("click", () => filtrar("figma"));   