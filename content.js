(function () {
  const highlightStyle = `
    .___hide-hover-highlight {
      outline: 2px solid red !important;
      cursor: pointer !important;
    }
  `;

  // Añadir CSS al documento
  const styleTag = document.createElement('style');
  styleTag.textContent = highlightStyle;
  document.head.appendChild(styleTag);

  function handleMouseOver(e) {
    e.target.classList.add('___hide-hover-highlight');
  }

  function handleMouseOut(e) {
    e.target.classList.remove('___hide-hover-highlight');
  }

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.style.display = 'none';

    // Cleanup después de hacer clic
    document.removeEventListener('mouseover', handleMouseOver);
    document.removeEventListener('mouseout', handleMouseOut);
    document.removeEventListener('click', handleClick, true);
    styleTag.remove();
  }

  // Activar modo selección
  document.addEventListener('mouseover', handleMouseOver);
  document.addEventListener('mouseout', handleMouseOut);
  document.addEventListener('click', handleClick, true);
})();
