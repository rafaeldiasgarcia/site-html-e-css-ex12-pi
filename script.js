document.addEventListener('DOMContentLoaded', function () {
    // Cria o elemento <img> para o logo
    const logo = document.createElement('img');
    logo.src = './logo.png'; // Substitua pelo caminho correto da imagem
    logo.alt = 'Logo do Projeto';
    logo.style.display = 'block';
    logo.style.margin = '20px auto';
    logo.style.width = '150px'; // Ajuste o tamanho conforme necessário
    logo.style.height = 'auto';

    // Adiciona o logo ao final do <body>
    document.body.appendChild(logo);

    // Verifica se o botão existe antes de adicionar o evento
    const botaoContato = document.getElementById('botao-contato');
    if (botaoContato) {
        botaoContato.addEventListener('click', function () {
            alert('Enviado com sucesso');
        });
    } else {
        console.warn('Elemento com ID "botao-contato" não encontrado.');
    }
});

