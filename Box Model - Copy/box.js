function showText() {
    document.getElementById('more')
    .style.display='none'
    document.getElementById('text')
    .style.display='inline'
  }

  function more(message) {
  
    const element=document.getElementById('more');
    element.style.display='block';
    element.textContent=message;
  
    element.addEventListener('click', onClick);
  
    function onClick(event) {
      event.target.style.display='none';
    }
  }
  