
document.addEventListener('DOMContentLoaded', function() {
   
    const hiddenSections = document.querySelectorAll('.hidden');

    hiddenSections.forEach(function(section) {
        section.classList.remove('hidden');
        section.classList.add('show');
    });

    
    const cards = document.querySelectorAll('.resultados .card');
    setTimeout(function() {
        cards.forEach(function(card) {
            card.classList.remove('hidden');
            card.classList.add('show');
        });
    }, 1000);

    
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();

            let msg = "";
             
            if (btn.id === "btn1") {
                msg = "Olá Adilton, gostaria de adquirir o Plano Básico (R$150)";
            } else if (btn.id === "btn2") {
                msg = "Olá Adilton, gostaria de adquirir o Plano Prata (R$450)";
            } else if (btn.id === "btn3") {
                msg = "Olá Adilton, gostaria de adquirir o Plano Gold (R$750)";
            }

            let encodedMsg = encodeURIComponent(msg);

            
            setTimeout(() => {
                window.open(`https://wa.me/558587119838?text=${encodedMsg}`, "_blank");
            }, 300);

            
        });
    });
});