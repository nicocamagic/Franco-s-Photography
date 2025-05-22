    // Botón mostrar más paquetes interacción toggle
    const btnExtra = document.getElementById('btnExtraPaquetes');
    const extraPaquetes = document.getElementById('extraPaquetes');

    btnExtra.addEventListener('click', () => {
      if (extraPaquetes.style.display === 'none' || extraPaquetes.style.display === '') {
        extraPaquetes.style.display = 'block';
        btnExtra.textContent = 'Mostrar menos paquetes';
      } else {
        extraPaquetes.style.display = 'none';
        btnExtra.textContent = 'Mostrar más paquetes';
      }
    });

    // Interactividad botón sección 2 para cursor y touch
    const ctaBtn = document.querySelector('#accion .btn-animated');
    ctaBtn.addEventListener('mouseenter', () => {
      ctaBtn.style.transform = 'scale(1.1)';
      ctaBtn.style.boxShadow = '0 0 30px var(--naranja)';
      ctaBtn.style.color = 'var(--naranja)';
      ctaBtn.style.backgroundColor = 'var(--blanco)';
    });
    ctaBtn.addEventListener('mouseleave', () => {
      ctaBtn.style.transform = 'scale(1)';
      ctaBtn.style.boxShadow = '0 0 15px var(--morado-oscuro)';
      ctaBtn.style.color = 'var(--blanco)';
      ctaBtn.style.backgroundColor = 'var(--morado-oscuro)';
    });

    // Táctil para móviles (toque)
    ctaBtn.addEventListener('touchstart', () => {
      ctaBtn.style.transform = 'scale(1.1)';
      ctaBtn.style.boxShadow = '0 0 30px var(--naranja)';
      ctaBtn.style.color = 'var(--naranja)';
      ctaBtn.style.backgroundColor = 'var(--blanco)';
    });
    ctaBtn.addEventListener('touchend', () => {
      ctaBtn.style.transform = 'scale(1)';
      ctaBtn.style.boxShadow = '0 0 15px var(--morado-oscuro)';
      ctaBtn.style.color = 'var(--blanco)';
      ctaBtn.style.backgroundColor = 'var(--morado-oscuro)';
    });

    