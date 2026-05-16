// Seleciona os elementos do DOM
const loginModal = document.getElementById('login-modal');
const closeModalBtn = document.getElementById('close-modal');

// FUNÇÃO PARA ABRIR O MODAL
// Chame esta função no evento de clique do seu botão de login principal da página
function openLoginModal() {
    loginModal.showModal();
}

// FUNÇÃO PARA FECHAR O MODAL
function closeLoginModal() {
    loginModal.close();
}

// Ouvinte de evento para o botão de fechar (X)
closeModalBtn.addEventListener('click', closeLoginModal);

// OPCIONAL: Fecha o modal se o usuário clicar na área escura (backdrop) do lado de fora
loginModal.addEventListener('click', (event) => {
    const dialogDimensions = loginModal.getBoundingClientRect();
    if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
    ) {
        loginModal.close();
    }
});