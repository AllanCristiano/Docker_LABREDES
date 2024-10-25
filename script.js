document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(name && email && message) {
        alert('Mensagem enviada com sucesso!\nNome: ' + name + '\nEmail: ' + email);
        // Aqui você pode enviar os dados do formulário via AJAX para um servidor
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

