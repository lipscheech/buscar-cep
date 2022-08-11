const inputCep = document.querySelector('input[name=cep]');
const buttonCep = document.querySelector('.buttonCep');

let xhr = new XMLHttpRequest();

const request = (event) => {
    event.preventDefault();

    xhr.open('get', `https://viacep.com.br/ws/${inputCep.value}/json/`, true);
    xhr.send();
    xhr.onload = function() {
       let  data = JSON.parse(this.response);
       console.log(data);
       preencherCampos(data);
    }
}

const preencherCampos = (data) => {
    document.querySelector('input[name=endereco]').value = data.logradouro
    document.querySelector('input[name=bairro]').value = data.bairro;
    document.querySelector('input[name=complemento]').value = data.complemento;
    document.querySelector('input[name=cidade]').value = data.localidade;
    document.querySelector('input[name=estado]').value = data.uf;
} 

buttonCep.addEventListener("click", request);