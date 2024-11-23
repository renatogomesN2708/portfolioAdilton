document.addEventListener('DOMContentLoaded', function() {
    // 1. Definindo o IntersectionObserver
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach( (entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0 // Só ativa quando 20% do elemento estiver visível
    });

    // Seleciona todos os elementos com a classe 'hidden' para aplicar a animação
    const elements = document.querySelectorAll('.hidden');
    elements.forEach((element) => myObserver.observe(element));

    // 2. Lógica do botão para redirecionamento do WhatsApp
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão de envio de formulário ou redirecionamento

            let msg = "";
            if (btn.id === "btn1") {
                msg = "Olá Adilton, gostaria de adquirir o Plano Básico (R$150)";
            } else if (btn.id === "btn2") {
                msg = "Olá Adilton, gostaria de adquirir o Plano Prata (R$450)";
            } else if (btn.id === "btn3") {
                msg = "Olá Adilton, gostaria de adquirir o Plano Gold (R$750)";
            }

            // Codifica a mensagem para o formato de URL
            let encodedMsg = encodeURIComponent(msg);
            console.log(`Mensagem codificada: ${encodedMsg}`); // Depuração: Verifique a mensagem codificada

            // Adiciona um pequeno atraso (300ms) antes de abrir o link do WhatsApp
            setTimeout(() => {
                // Depuração: Verifique o link final que será aberto
                console.log(`Abrindo link do WhatsApp: https://wa.me/558587119838?text=${encodedMsg}`);
                
                // Redireciona para o WhatsApp com a mensagem codificada
                window.open(`https://wa.me/558587119838?text=${encodedMsg}`, "_blank");
            }, 300);
        });
    });
});
