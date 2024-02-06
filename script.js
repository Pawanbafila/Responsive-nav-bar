function showbar(){
    const bar = document.querySelector('.sidenav')
    bar.style.display = 'block'
}

function hidebar(){
    const hide = document.querySelector('.sidenav')
    hide.style.display = 'none'

}


gsap.from("nav .logo, nav ul li",
{
   duration:.5,
   color:"black",
   stagger:.5 , 
   y:"10",
   
})
