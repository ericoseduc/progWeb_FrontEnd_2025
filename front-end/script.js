let mensagem = '"Olá"'

// let nome = prompt("Digite seu nome:")

// mensagem = (`<u><em>${mensagem}!</em> ${nome}</u>`)
// const titulo = document.querySelector('h2')
// titulo.innerHTML = mensagem

const data = document.querySelector('#data_date');
let hoje = new Date();
console.log(hoje);

const tempo = setInterval(() => {
    data.innerHTML = hoje.toLocaleDateString('PT-BR',{
        day:"2-digit",
        month:"2-digit",
        year:"numeric",
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"
    })
}, 1000);

const listaDeAlunos = document.querySelectorAll('li');
console.log(listaDeAlunos);
listaDeAlunos.forEach(el => {
    el.innerHTML = "<a href=http://github.com/"+el.innerText+">"+el.innerText+"</a>";
    el.addEventListener('click',() => cliqueLi(el));
})

const cliqueLi = (el) => {
    el.classList.toggle('selecionado');
}