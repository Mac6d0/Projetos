const textos = {
  historia: "Aqui está o texto sobre a História da Cloud Computing.",
  funcoes: "Aqui está o texto sobre as Funções da Cloud Computing.",
  ferramentas: "Aqui está o texto sobre as Ferramentas da Cloud Computing.",
  futuro: "Aqui está o texto sobre o Futuro da Cloud Computing."
};

// Variáveis de acesso ao DOM
const modal = document.getElementById("modal");
const textoModal = document.getElementById("textoModal");
const fecharBtn = document.getElementById("fechar");
const scrollToTopButton = document.getElementById("scrollToTop");

// Abre o modal com o conteúdo específico ao clicar nas caixas de texto
document.querySelectorAll(".caixa-texto").forEach((item) => {
  item.addEventListener("click", function () {
    const topic = this.getAttribute("data-topic");
    textoModal.innerText = textos[topic]; // Preenche o texto no modal
    modal.style.display = "block"; // Exibe o modal
  });
});

// Fecha o modal quando o botão de fechar é clicado
fecharBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha o modal clicando fora dele
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Exibe o botão de "Voltar ao topo" quando o usuário rola a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Função para rolar até o topo da página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Adiciona uma transição suave ao rolar
  });
}

// Adiciona evento de clique no botão de scroll para cima
scrollToTopButton.addEventListener("click", scrollToTop);