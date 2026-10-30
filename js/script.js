
//  let degree = +prompt("enter your degree please:")

// if (degree >=90 && degree <= 100) {
//     alert("A")
// } else if (degree >=80 && degree < 90) {
//     alert("B")
// } else if (degree >=70 && degree < 80) {
//     alert("C")
// } else if (degree >=60 && degree < 70) {
//     alert("D")
// } else {
//     console.log("F")
// } 





// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }


// let n = 5;

// for (x = 0; x <= 12; x++) {
//     console.log(`${n} * ${x} = ${n * x}`);
// }







// let password = prompt("Enter your Password!");

// while (password !== "12345") {
//     password = prompt("Wrong Password , Try Again");
// }

// console.log("Welcome back");






// let fact = +prompt("Enter Number to calculate its factorial:");
// let sum = 1;

// for (let i = 1; i <= fact; i++) {
//  console.log(sum * i);
//  sum *= i;
// }






// let password = prompt("Enter your password:");
// for (;password !== "12345"; ) {
    
//    password = prompt("Wrong password, try again:");
// }
// console.log("Welcome back!");





// let sum = 0;

// for (let i = 1; i <=4; i++) {
//     let num = +prompt("Enter number :");
//     sum += num;
// }

// let avg = sum / 4;

// console.log(`The average of the numbers is: ${avg}`);







// let i = 1;
// for (i = 1; i < 60; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }





// let total = 0;
 

// for (let i = 0; i < 20; i++) {
    
//     if (i % 2===0) {
//         total = total + i;
//     }
// }

// console.log(` the result is : ${total}`);



// let year = +prompt("Enter your year please:");
// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     console.log(`${year} is a leap year`);
// } else {
//     console.log(`${year} is not a leap year`);
// }







// let num1 = +prompt("Enter first number please:");
// let operator = prompt("Enter your operator please: +, -, *, /");
// let num2 = +prompt("Enter second number please:");
// let result;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         break;

//     case "-":
//         result = num1 - num2;
//         break;

//     case "*":
//         result = num1 * num2;
//         break;

//     case "/":
//         if (num2 === 0) {
//             result = "Cannot divide by zero"; // أو الديفلت اللي مطلوب في التاسك عندك
//         } else {
//             result = num1 / num2;
//         }
//         break;

//     default:
//         result = "Invalid operator";
//         break;
// }

// console.log(`The result is: ${result}`);



// let num = 5;

// for (let i=1 ; i <=12; i++){
//     console.log(`${num} * ${i} = ${num * i}`);
// }


// let evenSum = 0;
// let oddSum = 0;

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         evenSum += i; 
//     } else {
//         oddSum += i;
//     }
// }

// console.log("Sum of even numbers:", evenSum);
// console.log("Sum of odd numbers:", oddSum);




// for (let i = 1; i <= 30; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }



let  correctPassword = "12345";
let maxAttempts = 3;
for (let i=1; i <= maxAttempts; i++) {
    let password = prompt("Enter your password:");
    if (password === correctPassword) {
        console.log("Welcome back!");
        break;
    } else {
        if (i < maxAttempts && password !== correctPassword) {
            console.log("Wrong password, try again.");
        } else {
            console.log("You have exceeded the maximum number of attempts.");
        }
    }
   }