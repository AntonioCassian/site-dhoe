  fetch('../../assets/json/campanhas.json')
  .then(resposta => resposta.json())
  .then(json => elements(json));

  const elements = (json) =>{
      const caminho = document.querySelector('.saibaMais-img img');
    const img = document.createElement("img")
    img.src= json.imagem;
    caminho.appendChild(img);
  }