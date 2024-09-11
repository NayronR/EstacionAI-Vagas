// Obtenção de todas as vagas (cards)
const cards = document.querySelectorAll('.card');
const popup = document.getElementById('popup');

// Adiciona eventos para cada vaga
cards.forEach(card => {
    card.addEventListener('mouseenter', (event) => {
        const status = card.getAttribute('data-status'); // Pega o status da vaga
        const statusText = status === 'ocupada' ? 'Vaga Ocupada' : 'Vaga Livre'; // Define o texto conforme o status
        popup.textContent = statusText; // Define o conteúdo do popup
        
        // Posiciona o popup acima da vaga
        const rect = card.getBoundingClientRect();
        popup.style.left = `${rect.left + rect.width / 2}px`;
        popup.style.top = `${rect.top - 20}px`;
        popup.style.display = 'block'; // Mostra o popup
    });

    card.addEventListener('mouseleave', () => {
        popup.style.display = 'none'; // Esconde o popup quando o mouse sai
    });
});

