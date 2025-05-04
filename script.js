document.addEventListener(`DOMContentLoaded`, function(){

 const contactForm= document.getElementById(`contact-form`)
 if(contactForm){
 contactForm.addEventListener(`submit`,function(e){
    e.preventDefault()
    const name= document.getElementById(`name`).value
    const email= document.getElementById(`email`).value
    const message= document.getElementById(`message`).value
    console.log({name,email,message})

    if(name=== "" ||email===""||message===""){
        alert(`please fill in all fields`)
        return;
    }
    alert(`thank you ${name} for contacting me! i will get back to you soon`)
    contactForm.reset() 
 })
}
 const navLinks= document.querySelectorAll(`nav ul li a`)
 navLinks.forEach(link =>{
    link.addEventListener(`click`,function(e){
        e.preventDefault()
        const targetId= this.getAttribute(`href`).substring(1)
        const targetSection= document.getElementById(targetId)
         if(targetId){
            window.scrollTo({
                top:targetSection.offsetTop-60,
                behavior:`smooth`
            })
         }
    })
 })
 const yearSpan = document.getElementById(`year`)
 const currentYear = new Date().getFullYear()
 yearSpan.textContent= currentYear

})