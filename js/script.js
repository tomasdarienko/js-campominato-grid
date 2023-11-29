
let genera = document.getElementById('genera')
genera.addEventListener('click',function(){

     
     function quadrato(num) {
          const div = document.createElement('div');
     
          div.classList.add('quadrato');
     
          return div
     }
     const griglia = document.getElementById('grid');
     
     
     for (i = 0; i < 100; i++) {
          let quad = quadrato();
          griglia.appendChild(quad)
     }
})

