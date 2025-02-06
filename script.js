
function scrollToSection(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        sections.forEach(section => {
            section.style.display = 'none';
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        });
        targetElement.style.display = 'block';
        setTimeout(() => {
            const offsetTop = targetElement.offsetTop - headerHeight - 10;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            targetElement.style.opacity = '1';
            targetElement.style.transform = 'translateY(0)';
        }, 50);
    }
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});
const headerHeight = document.querySelector('header').offsetHeight;
        const sections = document.querySelectorAll('section');
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
      sections.forEach(section => {
          section.style.display = 'none';
          section.style.opacity = '0';
          section.style.transform = 'translateY(20px)';
      });
      targetElement.style.display = 'block';
      setTimeout(() => {
          const offsetTop = targetElement.offsetTop - headerHeight - 10; // Ajuste de 10px abaixo do header
          window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
          });
          targetElement.style.opacity = '1';
          targetElement.style.transform = 'translateY(0)';
      }, 50);
  }
            });
        });
        document.querySelectorAll('.link-ancora').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelectorAll('.link-ancora').forEach(l => l.classList.remove('ativo'));
                this.classList.add('ativo');
            });
        });
        window.onscroll = function() {
            const backToTopButton = document.getElementById("back-to-top");
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 250) {
                backToTopButton.style.display = "block"; // Mostra o botão
                setTimeout(() => {
                    backToTopButton.classList.add("show"); // Adiciona a classe para a animação
                }, 10); // Pequeno delay para garantir que o display: block seja aplicado antes da animação
            } else {
                backToTopButton.classList.remove("show"); // Remove a classe para esconder com animação
                setTimeout(() => {
                    backToTopButton.style.display = "none"; // Esconde o botão após a animação
                }, 500); // Tempo correspondente à duração da transição
            }
        };
        
        // Leva o usuário de volta ao topo ao clicar no botão
        document.getElementById("back-to-top").onclick = function() {
            document.body.scrollTop = 0; // Para navegadores Safari
            document.documentElement.scrollTop = 0; // Para outros navegadores
        };

     