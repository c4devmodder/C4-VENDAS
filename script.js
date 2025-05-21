// Mudar cor do fundo ao clicar no botão
document.getElementById('mudarCorBtn').addEventListener('click', function() {
    const cores = ['#f4f4f4', '#e7e7e7', '#d4d4d4', '#c1c1c1'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
});

// Validar formulário de contato
document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulário enviado com sucesso! (Esta é apenas uma demonstração)');
    this.reset();
});

// Efeito suave ao rolar para as seções
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});