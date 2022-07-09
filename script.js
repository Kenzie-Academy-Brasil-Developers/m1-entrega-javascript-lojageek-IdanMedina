let item = {
  imagem: "./assets/img/painting/clock.jpg",
  nome: "DarkTimer",
  valor: "R$ 105,99",
  id: 'Action Figure'
};
let item0 = {
  imagem: "./assets/img/painting/gamepad.jpg",
  nome: "Infra Game",
  valor: "R$ 77,88",
  id: 'Action Figure'
};
let item1 = {
  imagem: "./assets/img/painting/personagem.jpg",
  nome: "Stin Head",
  valor: "R$ 68,99",
  id: 'Action Figure'
};
let item2 = {
  imagem: "./assets/img/actions/animewoman.jpg",
  nome: "Adventurer like Hell",
  valor: "R$ 82,90",
  id: 'Paintings'
};
let item3 = {
  imagem: "./assets/img/actions/dragonballpersonagem.jpg",
  nome: "Goku",
  valor: "R$ 78,90",
  id: 'Paintings'
};
let item4 = {
  imagem: "./assets/img/actions/starwarspersonagem.jpg",
  nome: "Baby Yoda",
  valor: "R$ 82.90",
  id: 'Paintings'
};
 
let paintList = []
let figureList = []
///////////////////////////////////////////

function criarItemPintura(obj) {
  for (let i in obj){
  if (obj.id !== 'Paintings'){return 'Use a função para Action Figures'}
}
  delete obj.id;
  paintList.push(obj)
  return paintList
}
console.log(criarItemPintura(item2));
////////////////////////////////////////

function criarItemFigura(obj) {
    for (let i in obj){
        if (obj.id !== 'Action Figure'){return 'Use a função para Paintings'}
      }
        delete obj.id;
        figureList.push(obj)
        return figureList
      }
    
console.log(criarItemFigura(item));
/////////////////////////////////////////

let listaPinturas = document.getElementsByClassName("list")[0];
let listaFiguras = document.getElementsByClassName("list")[1];

function ActionFigures(list) {
  for (let i = 0; i < list.length; i++) {
    //let itemLista = document.createElement('li');
    let imagemProduto = document.createElement("img");
    // console.log(imagemProduto)
    let nomeProduto = document.createElement("span");
    let valorProduto = document.createElement("span");
    let clasList = document.querySelector(".list");
    let clasCard = document.querySelector(".card");
    let clasImg = document.querySelector(".image");
    let clasItN = document.querySelector(".item-name");
    let clasItV = document.querySelector(".item-value");

   /* nomeProduto.innerText = `${list[i].nome}`;
   // valorProduto.innerText = `${list[i].valor}`;
    //imagemProduto.innerText = `${list[i].imagem}`;

    figProduct.appendChild(nomeProduto);
    figProduct.appendChild(valorProduto);
    figProduct.appendChild(imagemProduto);
    /*itemLista.appendChild(clasList);
    itemLista.appendChild(clasCard);
    itemLista.appendChild(clasImg);
    itemLista.appendChild(clasItN);
    itemLista.appendChild(clasItV);
    listaFiguras.appendChild(figProduct);*/
  }
}
console.log(ActionFigures(criarItemFigura));
