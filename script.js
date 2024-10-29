document.getElementById('area').addEventListener('change', function() {
    const selectedArea = this.value;
    const continuarButton = document.getElementById('continuar');

    if (selectedArea) {
        continuarButton.style.display = 'block';
    } else {
        continuarButton.style.display = 'none';
    }
});

document.getElementById('continuar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cidade = document.getElementById('cidade').value;
    const selectedArea = document.getElementById('area').value;

    // Salvar dados no Local Storage
    localStorage.setItem('nome', nome);
    localStorage.setItem('idade', idade);
    localStorage.setItem('cidade', cidade);
    localStorage.setItem('area', selectedArea);

    // Redirecionar para o Google
    if (selectedArea) {
        const areaNome = selectedArea.replace(/_/g, ' '); // Troca o underscore por espaço
        const searchQuery = `vagas de ${areaNome}`;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        window.location.href = googleSearchUrl;
    }
});
