 // Ejecutar la función inmediatamente
  updateCountdown();
  
  // Actualizar cada segundo
  const countdownInterval = setInterval(updateCountdown, 1000);
  
  // Animación suave al hacer scroll a las secciones
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
