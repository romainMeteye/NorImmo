const stringRegex = /^[a-zA-Z]+$/;
const numberRegex = /^((\+)33|0)[1-9](\d{2}){4}$/;
const blackList = /\b((con)|(connard)|(sex)|(sexe))\b/;

// *** Prevent the form submit ***
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  });

  // *** Count the length of the characters in the message ***
  const messageText = document.getElementById("message").addEventListener("input", countChars);

//   const message = messageText.value;
  const counterShow = document.getElementById("maxLength");
  const insultShow = document.getElementById("messageError");
  const maxLength = 400;
  let numberOfChars;
  counterShow.innerHTML = `Caractères restants : ${maxLength}`;

  function countChars(){
    let textLength = this.value.length;
    numberOfChars = maxLength - textLength;
    counterShow.innerHTML = `Caractères restants : ${numberOfChars}`;
        if (numberOfChars <=0){
            counterShow.innerHTML = `Caractères restants : 0 - Attention vous avez dépassé le nombre de caractères autorisé !`;
        }
  } 

// *** Change input color when correct / incorrect and show Error message for input type : lastName ***
document.querySelectorAll('input[id="lastName"]').forEach((input) => {
    input.addEventListener('blur', function() {
        if (this.value.length < 2 || this.value.length > 50 || !this.value.match(stringRegex)){
            this.classList.remove('green');
            this.classList.add('red');
            document.getElementById('lastNameError').textContent = "Le nom doit faire entre 2 et 50 caractères et ne doit contenir que des lettres";
      } else {       
        this.classList.remove('red');
        this.classList.add('green');
        document.getElementById('lastNameError').textContent ="";     
      }
    });
  });

// *** Change input color when correct / incorrect and show Error message for input type : firstName ***
document.querySelectorAll('input[id="firstName"]').forEach((input) => {
    input.addEventListener('blur', function() {
        if (this.value.length < 2 || this.value.length > 50 || !this.value.match(stringRegex)){
            this.classList.remove('green');
            this.classList.add('red');
            document.getElementById('firstNameError').textContent = "Le prénom doit faire entre 2 et 50 caractères et ne doit contenir que des lettres";

      } else {       
        this.classList.remove('red');
        this.classList.add('green');
        document.getElementById('firstNameError').textContent = "";  
      }
    });
  });

// *** Change input color when correct / incorrect and show Error message for input type : number ***
  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener('blur', function() {
        if (!this.value.match(numberRegex)){
            this.classList.remove('green');
            this.classList.add('red');
            document.getElementById('phoneError').textContent = "Le numéro de téléphone n'est pas valide";

      } else {       
        this.classList.remove('red');
        this.classList.add('green');
        document.getElementById('phoneError').textContent = "";   
      }
    });
  });

// *** Change input color when correct / incorrect and show Error message for : textarea ***
const textArea = document.getElementById("message");
textArea.addEventListener("input", checkTextArea);

function checkTextArea() {
    if (this.value.length <= 0 || this.value.length > maxLength || this.value.match(blackList)){
            this.classList.remove('green');
            this.classList.add('red');
            if (this.value.match(blackList)){
              insultShow.innerHTML = `Les insultes sont interdites !`;
            }
            else {
              insultShow.innerHTML = "";
            }
        } else {       
            this.classList.remove('red');
            this.classList.add('green');
            insultShow.innerHTML = "";
              }
  }