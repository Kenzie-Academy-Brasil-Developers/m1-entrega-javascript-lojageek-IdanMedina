let item = {
    imagem: "./assets/img/actions/dragonballpersonagem.jpg",
    nome: "Goku e Yoda",
    valor: 'R$ 12.34',
  };
  ///////////////////////////////////////////
  
  const pinturas = [];
  function criarItemPintura(obj) {
   let pinturas = [];
    let unidade = [];
    for (let i in obj) {
      unidade.push(obj[i]);
    }
    do {
      pinturas.push(unidade);
  } while (pinturas.length <= 2);
   return pinturas;
  }
  criarItemPintura(item)
  console.log(criarItemPintura(item));
  ////////////////////////////////////////
  
  const figuras = [];
  function criarItemFigura(obj) {
      let figuras = [];
    let unidade = [];
    for (let i in obj) {
      unidade.push(obj[i]);
    }
    do {
      figuras.push(unidade);
    } while (figuras.length < 3);
    return figuras;
  }
  criarItemFigura(item);
  console.log(criarItemFigura(item))
  /////////////////////////////////////////
  
  let listaPinturas = document.getElementsByClassName('list')[0];
  let listaFiguras = document.getElementsByClassName('list')[1];
  
  function ActionFigures (list){
  
  for(let i = 0; i < list.length; i++){
     
      //let itemLista = document.createElement('li');
      let imagemProduto = document.createElement('img');
     // console.log(imagemProduto)
      let nomeProduto = document.createElement('span');
      let valorProduto = document.createElement('span');
      let clasList = document.querySelector(".list")
      let clasCard = document.querySelector(".card")
      let clasImg = document.querySelector(".image")
      let clasItN = document.querySelector(".item-name")
      let clasItV = document.querySelector(".item-value")
      
      nomeProduto.innerText = `${list[i].nome}`;
      valorProduto.innerText = `${list[i].valor}`;
      imagemProduto.innerText = `${list[i].imagem}`;
  
      figProduct .appendChild(nomeProduto);
      figProduct .appendChild(valorProduto);
      figProduct .appendChild(imagemProduto);
      /*itemLista.appendChild(clasList);
      itemLista.appendChild(clasCard);
      itemLista.appendChild(clasImg);
      itemLista.appendChild(clasItN);
      itemLista.appendChild(clasItV);*/
      listaFiguras.appendChild(figProduct);
  
  
    }
  }
  console.log(ActionFigures(figuras))