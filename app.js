(function() {
  const KEY = 'installAppAccepted';
  const alertBox = document.getElementById('install-alert');
  const acceptBtn = document.getElementById('accept-btn');

  // Mostrar alerta solo si no aceptó antes
  if (!localStorage.getItem(KEY)) {
    window.addEventListener('load', () => {
      alertBox.classList.remove('hidden');
      // Ocultar automáticamente después de 6 segundos
      setTimeout(() => {
        if (!localStorage.getItem(KEY)) {
          alertBox.classList.add('hidden');
        }
      }, 16000);
    });
  }

  // Si presiona Aceptar → guardar y ocultar para siempre
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem(KEY, 'true');
    alertBox.classList.add('hidden');
  });
})();

