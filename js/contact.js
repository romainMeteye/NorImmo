const stringRegex = /^[a-zA-Z]+$/;
const numberRegex = /^((\+)33|0)[1-9](\d{2}){4}$/;
const blackList = ["sexe","sex","con","connard"]

// *** Prevent the form submit ***
document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  });


  // *** Count the length of the characters in the message ***
  const messageText = document.getElementById("message").addEventListener("input", countChars);
  document.getElementById("message").addEventListener("input", checkInsults);


//   const message = messageText.value;
  const counterShow = document.getElementById("maxLength");
  const insultShow = document.getElementById("insult");
  const maxLength = 10;
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
        return true;
        }
    }
};
  

// *** Change input color when correct / incorrect for input type : text ***
document.querySelectorAll('input[type="text"]').forEach((input) => {
    input.addEventListener('blur', function() {
        if (this.value.length < 2 || this.value.length > 50 || !this.value.match(stringRegex)){
            this.classList.remove('green');
            this.classList.add('red');
      } else {       
        this.classList.remove('red');
        this.classList.add('green');     
      }
    });
  });

// *** Change input color when correct / incorrect for input type : number ***
  document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener('blur', function() {
        if (!this.value.match(numberRegex)){
            this.classList.remove('green');
            this.classList.add('red');
      } else {       
        this.classList.remove('red');
        this.classList.add('green');     
      }
    });
  });

  // *** Change input color when correct / incorrect for input type : message ***
  document.querySelectorAll('#message').forEach((input) => {
    input.addEventListener('blur', function() {
        if (this.value.length <= 0 || this.value.length > maxLength || checkInsults){
            this.classList.remove('green');
            this.classList.add('red');
      } else {       
        this.classList.remove('red');
        this.classList.add('green');     
      }
    });
  });