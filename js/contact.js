const stringRegex = /^[a-zA-Z]+$/;
const numberRegex = /^((\+)33|0)[1-9](\d{2}){4}$/;
const blackList = ["sexe","sex","con","connard"];
let insultPresence = false;

// *** Prevent the form submit ***
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  });


  // *** Count the length of the characters in the message ***
  const messageText = document.getElementById("message").addEventListener("input", countChars);
  document.getElementById("message").addEventListener("input", checkInsults);


//   const message = messageText.value;
  const counterShow = document.getElementById("maxLength");
  const insultShow = document.getElementById("messageError");
  const maxLength = 20;
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
  
  function checkInsults() {  
    for (insult of blackList) {
        if (this.value.includes(insult)) {
        insultShow.innerHTML = `Un mot non autorisé a été détécté : "${insult}"`;
        insultPresence = true;
        this.classList.add('red');

        }
        else {
            insultPresence = false;
        }
        }
};
  

// *** Affichage des messages d'erreurs ***



// *** Change input color when correct / incorrect for input type : lastName ***
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


// *** Change input color when correct / incorrect for input type : firstName ***
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


// *** Change input color when correct / incorrect for input type : number ***
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

// *** Change input color when correct / incorrect for : textarea ***
const textArea = document.getElementById("message");
textArea.addEventListener("input", checkTextArea);

function checkTextArea() {
    if (textArea.value.length <= 0 || textArea.value.length > maxLength || insultPresence){
       this.classList.remove('green');
            this.classList.add('red');
        } else {       
            this.classList.remove('red');
            this.classList.add('green');
              }
  }