document.addEventListener('DOMContentLoaded' , function(){

const emailInput = document.querySelector('.email-input');
const newsLetterView = document.querySelector('.design');
const tankView = document.querySelector('.thank-view');
const subscribeBtn = document.querySelector('#subscribe-btn');
const errorMessage = document.querySelector('.error-message');
const DismissBtn = document.querySelector('.dismiss-btn')

                      
// Regular expression for validating email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      
subscribeBtn.addEventListener('click', function (event) {
    console.log(emailInput);
    
    event.preventDefault(); // Prevent the default behavior of the anchor tag
                          
    const emailValue = emailInput.value.trim(); // Get the input value

                          
                          
    if (!emailValue) {
        // If email is empty
        errorMessage.textContent = 'Email field cannot be empty.';
        errorMessage.classList.remove('hidden');
    }
    else if (!emailRegex.test(emailValue)) {
        // If email format is incorrect
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.classList.remove('hidden');
    } else {
        // If email is valid
        errorMessage.classList.add('hidden');
        newsLetterView.classList.add('hidden');
        newsLetterView.classList.remove('sm:flex');

        tankView.classList.remove('hidden');
        // Add your submission logic here, like making an API call
    }
                          
    });
    DismissBtn.addEventListener('click' , function() {
        newsLetterView.classList.remove('hidden');
        newsLetterView.classList.add('sm:flex');

        tankView.classList.add('hidden');
    })

                        
    
                      
});
