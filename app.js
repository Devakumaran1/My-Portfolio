let menuIcon=document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')

} 
// scroll section
let sections=document.querySelector('section');
let navLinks=document.querySelector('header nav a');

window.scroll=() =>{
    sections.forEach(sec  => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >=offset && top<offset+height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id +']').classList.add('active');
            });
        };
        
    });

    // sticky navbar
    let header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100 );

    // remove toggle icon and navbar
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('avtive');
};
// scroll reval
ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
});
    ScrollReveal().reveal('.home-content,heading', {origin:'top' });
    ScrollReveal().reveal('.home-img, .projects-flexs, .contact form', {origin:'bottom' });
    ScrollReveal().reveal('.home-content h1', {origin:'left' });
    ScrollReveal().reveal('.Technical-bars', {origin:'left' });
    ScrollReveal().reveal(' .projects-flex', {origin:'Right' });
    ScrollReveal().reveal(' .projects-flexs', {origin:'top' });
   
// typescript
var typed= new Typed(".text",{
    strings:["DEVAKUMARAN G"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});