fetch('../../assets/json/campanhas.json')
  .then(resposta => resposta.json())
  .then(json => elements(json))
  .catch(e => console(e));
  


  
  const elements = (json) => {
    //const urlSearchParams = new URLSearchParams(window.location.href = json.link);
    //const postId = urlSearchParams.get("id");  
    
    //console.log(urlSearchParams);
    //console.log();
    
    const cadd = document.createElement('div');
    
    for(let inf of json){          
        const card= document.createElement('div');
        
        const img = document.createElement("img");
        img.src = inf.imagem;
        const picture = document.createElement("picture");
        picture.appendChild(img);
        picture.classList.add("doar-card-picture");
        
        
        const h4 = document.createElement("h4");
        h4.innerHTML = inf.nomeCampanha;
        
        const pDes = document.createElement("p");
        pDes.innerHTML = inf.descricao;
        
        const p = document.createElement("p");
        p.innerHTML = inf.encerramento;
        const div = document.createElement('div');
        div.appendChild(h4);
        div.appendChild(pDes);
        pDes.classList.add("pDes");
        div.appendChild(p);
        div.classList.add("doar-card-title");
      
          const divBnt = document.createElement('div');
          const button = document.createElement('button');
          const a = document.createElement('a');
      //a.id = inf.id;
      //a.href= inf.link;
          a.innerText = "SAIBA MAIS";
          a.setAttribute("href", `./saibaMais.html${inf.id}`)
          button.appendChild(a);
          divBnt.appendChild(button);
          divBnt.classList.add("doar-card-button")


          card.appendChild(picture);
          card.appendChild(div);
          card.appendChild(divBnt);
          card.classList.add("doar-card");

          console.log(a)
          
          cadd.appendChild(card);
          cadd.classList.add("campanhas-dhoe")
        }

        const cards = document.querySelector('#elementCard');
        cards.appendChild(cadd);

      }
      
      /**
       * if(!postId){
        elements();
      } else{
        console.log(postId);
      }
       */
        
    
   

