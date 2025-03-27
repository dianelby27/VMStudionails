(function(){
    const sliders = [...document.querySelectorAll(".blog_body")]
    const buttonNext = document.querySelector("#next")
    const buttonbefore = document.querySelector("#before")
    let value

    buttonNext.addEventListener("click", ()=> {
        changePosition(1)
    })
    buttonbefore.addEventListener("click", ()=> {
        changePosition(-1)
    })

    const changePosition = (add)=>{
        const currentBlog = document.querySelector(".blog_body--show").dataset.id
        value = Number(currentBlog)
        value+= add

        sliders[Number(currentBlog)-1].classList.remove("blog_body--show")
        if(value == sliders.length+1 || value == 0) {
            value = value == 0 ? sliders.length : 1
        }

        sliders[value-1].classList.add("blog_body--show")
    }

})()