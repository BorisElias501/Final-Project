 /* ------ cameras ----- */
   
 let animado = document.querySelectorAll(".animado");
   function showScroll() {
      let scrollTop = document.documentElement.scrollTop;
      for(var i = 0; i < animado.length; i++) {
         let altAnimado = animado[i].offsetTop;
         if(altAnimado -300 < scrollTop){
            animado[i].style.opacity = 3;
         }
      }
   }
   window.addEventListener('scroll', showScroll);