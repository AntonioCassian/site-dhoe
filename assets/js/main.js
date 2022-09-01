class MainCampanha {
    constructor() {
        this.formulario = document.querySelector('.form');

        this.event();
    }
    event(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);
        })
    }
    handleSubmit(e){
        e.preventDefault();
        //console.log('Formulario não enviado')
        const input = this.checkInput();
        const inputPassword = this.validPassword();

        if(input && inputPassword){
            alert('Formulario Enviado.');
            this.formulario.submit();
        }
    }

    


    validPassword() {
        let valid = true;
        const senha = this.formulario.querySelector('.senha-cad');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value!== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisa ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisa ser iguais.');
        }
        if(senha.value.length < 6 || senha.value.length > 8) {
            valid = false;
            this.criaErro(senha, 'Senha precia estrar entre 6 e 8 caracteres.')
        }

        return valid;
    }

    checkInput(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            //console.log(campo);
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criaErro(campo, `Campo ${label} está em branco.`);
                 valid = false;
            }
        }
        return valid;
    }
    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const campanha = new MainCampanha();
