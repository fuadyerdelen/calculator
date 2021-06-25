     const btnZero = document.getElementById("zero");
     const btnOne = document.getElementById("one");
     const btnTwo = document.getElementById("two");
     const btnThree = document.getElementById("three");
     const btnFour = document.getElementById("four");
     const btnFive = document.getElementById("five");
     const btnSix = document.getElementById("six");
     const btnSeven = document.getElementById("seven");
     const btnEight = document.getElementById("eight");
     const btnNine = document.getElementById("nine");
     const btnAdd = document.getElementById("add");
     const btnSubtract = document.getElementById("subtract");
     const btnMultiply = document.getElementById("multiply");
     const btnDivide = document.getElementById("divide");
     const btnAC = document.getElementById("clear");
     const btnEquals = document.getElementById("equals");

     const screen = document.getElementById("screen");
     let result = null;
     let islem = null;

     screen.innerText = 0;

     let numberArray = [btnZero, btnOne, btnTwo, btnThree, btnFour, btnFive, btnSix, btnSeven, btnEight, btnNine];
     numberArray.forEach(number => {
         number.addEventListener("click", () => {
             add(number.innerText);
         })
     });




     let calcArr = [btnAdd, btnSubtract, btnMultiply, btnDivide];
     calcArr.forEach(number => {
         number.addEventListener("click", () => {
             calc(number.innerText);
         })
     });

     btnEquals.addEventListener("click", () => {
         equals()
         islem = '=';
     });
     btnAC.addEventListener("click", () => ac());


     function add(a) {
         if (islem === '=') ac();
         else if (islem === screen.innerText) screen.innerText = 0;
         screen.innerText = screen.innerText * 10 + parseInt(a);
     };




     function calc(i) {
         if (islem) equals();
         result = parseInt(screen.innerText);
         screen.innerText = i;
         islem = i;
     }

     function equals() {
         switch (islem) {
             case '+':
                 result = result + parseInt(screen.innerText);
                 break;
             case '-':
                 result = result - parseInt(screen.innerText);
                 break;
             case '*':
                 result = result * parseInt(screen.innerText);
                 break;
             case '/':
                 result = result / parseInt(screen.innerText);
                 break;
         }
         islem = null;
         screen.innerText = result;
     };

     function ac() {
         islem = null;
         result = null;
         screen.innerText = 0;
     }