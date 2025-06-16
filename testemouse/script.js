const area = document.querySelector('.area-com-luz');
  const luz = document.getElementById('efeito-luz');

  area.addEventListener('mousemove', (e) => {
    const rect = area.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    luz.style.left = `${x}px`;
    luz.style.top = `${y}px`;
    luz.style.opacity = 1;
  });

  area.addEventListener('mouseleave', () => {
    luz.style.opacity = 0;
  });