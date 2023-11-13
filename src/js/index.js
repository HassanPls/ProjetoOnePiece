const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        const personagemSelecionado = document.querySelector(".personagem.selecionado");

        botaoSelecionado.classList.remove("selecionado")
        botao.classList.add("selecionado")

        personagemSelecionado.classList.remove("selecionado")
        personagens[i].classList.add("selecionado")

    })
})