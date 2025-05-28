document.querySelectorAll('.hover-swap').forEach(img => {
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover;
  
    img.addEventListener('mouseenter', () => {
      img.src = hoverSrc;
    });
  
    img.addEventListener('mouseleave', () => {
      img.src = originalSrc;
    });
  });
  
  document.querySelectorAll('.image-overlay-container').forEach(container => {
    container.addEventListener('click', () => {
      container.classList.toggle('active');
    });
  });