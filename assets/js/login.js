const form = document.querySelector(".form");
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      const InputEmail = e.target.querySelector('#email-log');
      const Inputsenha = e.target.querySelector('#senha-log');
      const email = String(InputEmail.value);
      const senha = String(Inputsenha.value);

fetch('../../assets/json/campanhas.json')
    .then(resposta => resposta.json())
    .then(json => login(json))
    .catch(e => console.log(e));

    const login = (json) => {
        for (let inf of json) {
           if(email !== inf.email && senha !== inf.senha){
               alert("Dados incorretos, tente novamente.");
               return false;
           } 
           if(email === inf.email && senha !== inf.senha){
            alert("Dados incorretos, tente novamente.");
            return false;
        }
        if(email === inf.email && senha === inf.senha){
            return window.location =  `../logado/listaCampanhas.html`;
        }
        }
    }
    
  });
