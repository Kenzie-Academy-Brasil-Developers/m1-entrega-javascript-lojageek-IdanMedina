let item = [
  {
    imagem: "./assets/img/painting/clock.jpg",
    nome: "DarkTimer",
    valor: "R$ 105,99",
    id: "Paintings",
  },
  {
    imagem: "./assets/img/painting/gamepad.jpg",
    nome: "Infra Game",
    valor: "R$ 77,88",
    id: "Paintings",
  },
  {
    imagem: "./assets/img/painting/personagem.jpg",
    nome: "Stin Head",
    valor: "R$ 68,99",
    id: "Paintings",
  }];
let item2 = [  {
    imagem: "./assets/img/actions/animewoman.jpg",
    nome: "Hell Wanderer",
    valor: "R$ 82,90",
    id: "Action Figure",
  },
  {
    imagem: "./assets/img/actions/dragonballpersonagem.jpg",
    nome: "Goku",
    valor: "R$ 78,90",
    id: "Action Figure",
  },
  {
    imagem: "./assets/img/actions/starwarspersonagem.jpg",
    nome: "Baby Yoda",
    valor: "R$ 82.90",
    id: "Action Figure",
  }]
;

let paintList = [];
let figureList = [];

///////////////////////////////////////////

function criarItemPintura(obj) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id !== "Paintings") {
      return "Use a função para Action Figures";
    } else {
      paintList.push(obj[i]);
    }
  }
  delete obj.id;
  return paintList;
}
criarItemPintura(item);

////////////////////////////////////////

function criarItemFigura(obj) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].id !== "Action Figure") {
      return "Use a função para Paintings";
    } else {figureList.push(obj[i]);
    }
  }
  delete obj.id;
  return figureList;
}

criarItemFigura(item2);
/////////////////////////////////////////

let listaPinturas = document.getElementsByClassName("list")[0];
let listaFiguras = document.getElementsByClassName("list")[1];

function paintings(list) {
  for (let i = 0; i < list.length; i++) {
    let itemLista = document.createElement('li');
    let imagemProduto = document.createElement("img");
    let nomeProduto = document.createElement("span");
    let valorProduto = document.createElement("span");

    itemLista.classList.add("card");
    imagemProduto.classList.add("image");
    nomeProduto.classList.add("item-name");
    valorProduto.classList.add("item-value");

    nomeProduto.innerText = list[i].nome;
    valorProduto.innerText = list[i].valor;
    imagemProduto.src = list[i].imagem;

    listaPinturas.appendChild(itemLista);
    itemLista.appendChild(imagemProduto);
    itemLista.appendChild(nomeProduto);
    itemLista.appendChild(valorProduto);
  }
}
paintings(paintList)

function actionFigures(list) {
  for (let i = 0; i < list.length; i++) {
    let itemLista = document.createElement('li');
    let imagemProduto = document.createElement("img");
    let nomeProduto = document.createElement("span");
    let valorProduto = document.createElement("span");
   
    itemLista.classList.add("card");
    imagemProduto.classList.add("image");
    nomeProduto.classList.add("item-name");
    valorProduto.classList.add("item-value");
    
    nomeProduto.innerText = list[i].nome;
    valorProduto.innerText = list[i].valor;
    imagemProduto.src = list[i].imagem;

    listaFiguras.appendChild(itemLista);
    itemLista.appendChild(imagemProduto);
    itemLista.appendChild(nomeProduto);
    itemLista.appendChild(valorProduto);
  }
}
actionFigures(figureList)
