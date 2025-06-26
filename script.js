console.log("O cérebro está conectado e funcionando!");

const botao = document.querySelector("#meu-botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent = "Uhuuuuuul! A página reagiu ao meu click!"
});