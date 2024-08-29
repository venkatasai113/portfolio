/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')


if(navToggle)
{
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose)
    {
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }
    

/*=============== REMOVE MENU MOBILE ===============*/

const navLink=document.querySelectorAll('.nav__link')

const linkAction=()=>
{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== SWIPER PROJECTS ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/

const contactForm=document.getElementById('contact-form'),
     contactName=document.getElementById('contact-name'),
     contactEmail=document.getElementById('contact-email'),
     contactMsg=document.getElementById('contact-msg'),
     contactMessage=document.getElementById('contact-message');


const sendEmail=(e)=>{
    e.preventDefault()
    if(contactName.value==='' || contactEmail.value==='' || contactMsg.value=='')
    {
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('colur-red')

        contactMessage.textContent='write all the input feilds'
    }
    else{
        emailjs.sendForm('service_v4ik6vc','template_fd5wqis','#contact-form','X1tHnV86ZFk29TfsL')
        .then(()=>{
            contactMessage.classList.add('color-blue')
            contactMessage.textContent='Message sent'


            setTimeout(()=>{
                contactMessage.textContent=''
            },5000)
        },(error)=>{
            alert('OoPs! something has failed...',error)
        }
        )
        contactName.value=''
        contactEmail.value=''
        contactMsg.value=''
    }
}
contactForm.addEventListener('submit',sendEmail)







/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
