(function(){
    const openButton = document.querySelector(".nav_menu")
    const menu = document.querySelector(".nav_link")
    const closeMenu = document.querySelector(".nav_close")
    const btnFlotanteWs = document.querySelector(".btn_ws")
    const ModificarOp = document.querySelector(".nav_link--menu")
    const body = document.body;

    openButton.addEventListener("click", ()=>{
        ModificarOp.style.opacity = 1;
        menu.classList.add("nav_link--show")
        btnFlotanteWs.remove()
        body.classList.add('modal-open');

    })

    closeMenu.addEventListener("click", ()=>{
        menu.classList.remove("nav_link--show");
        document.body.appendChild(btnFlotanteWs);
        body.classList.remove('modal-open'); 

    })

})();


  