let firstName = document.getElementById("first")
let lastName = document.getElementById("last")
let email = document.getElementById("email")
let form = document.getElementById("form")
let submit = document.getElementById("btn")
let textarea = document.getElementById("text")
let formPopup = document.getElementById("form-popup");
let popUpCloseBtn = document.getElementById("close-popup");
let formInfoEL = document.getElementById("form-info")
     

form.addEventListener("submit", (e)=>{
        checkInputs()
        showPopUp()
        e.preventDefault()
      
      
        firstName = firstName.value;
       localStorage.setItem("first" , firstName);

      lastName = lastName.value;
      localStorage.setItem("last", lastName);

      email = email.value;
      localStorage.setItem("email" , email);

      textarea = textarea.value;
      localStorage.setItem("text", textarea)
       
      });
      
  

     function checkInputs(){
        let firstNameValue = firstName.value;
        let lastNameValue = lastName.value;
        let emailValue = email.value;
        let textareaValue = text.value

        if (firstNameValue === ''){
            alert('firstname cannot be blank');
        } 
        if (lastNameValue === ''){
            alert('lastname cannot be blank')
        }
        if(emailValue === ''){
            alert('enter a valid email')
        }
        if(textareaValue === ''){
            alert('Enter a message')
        } 
         
      }

 
    
    function showPopUp (){
        formInfoEL.innerHTML= ""
        const formEL = document.createElement('div')
        formEL.innerHTML = `
        <p>Your Message as been successfully sent.</p>`
        formPopup.classList.remove('hidden')
        formInfoEL.appendChild(formEL)
    }

   popUpCloseBtn.addEventListener("click", () => {
   
    formPopup.classList.add('hidden');
    form.submit()
    onsubmit="return false"
   

   });

   window.addEventListener('scroll', function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY >= 500) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

//   document.addEventListener('DOMContentLoaded', function () {
//     var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
//     var navbarToggler = document.querySelector('.navbar-toggler');

//     navLinks.forEach(function (navLink) {
//       navLink.addEventListener('click', function () {
//         if (navbarToggler.offsetParent !== null) {
//           navbarToggler.click();
//         }
//       });
//     });
//   });

//   $(document).ready(function () {
//     $('.nav-link').on('click', function () {
//       $('.navbar-collapse').collapse('hide');
//       $('.nav-link').removeClass('active');
//       $(this).addClass('active');
//     });
//   });

// document.addEventListener('DOMContentLoaded', function () {
//     var navLinks = document.querySelectorAll('.nav-link');

//     navLinks.forEach(function (link) {
//       link.addEventListener('click', function () {
//         var navbarCollapse = document.querySelector('.navbar-collapse');
//         navbarCollapse.classList.remove('show');
//       });
//     });
//   });








 
    
    

    