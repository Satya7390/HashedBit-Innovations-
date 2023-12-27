// JS Assignment 2

// Solve the questions given here -
// 1. Write code to display from 1 to 100 but just even numbers.

//================================================================

// for(i=2;i<=100;i++){
//     if(i%2==0){
//     console.log(i);
// }}
//==================================================================

// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
// ====================================================================
// let x,y,ch,alrt,Answer;
// ch = parseInt(prompt("Enter your choice b/w 1 to 5(sequeces is +,-,*,/,%):"));
// if(ch<=0 || ch>=6){
//     alrt= parseInt(prompt("Your Input is invalid :"));
// }
// x = parseInt(prompt("Enter first number:"));
// y= parseInt(prompt("Enter second number:"));
// switch (ch) {
//   case 1:
//   res = x + y;
//   console.log("Result is :" + res);
//   break

//   case 2:
//   res = x - y
//   console.log("Result is :" + res);
//   break

//   case 3:
//   res = x * y
//   console.log("Result is :" + res);
//   break

//   case 4:
//   res = x / y
//   console.log("Result is :" + res);
//   break

//   case 5:
//   res = x % y;
//   console.log("Result is :" + res);
//   break

//   default:
//     console.log("Invalid Choice:" + ch);
// }
// Answer= parseInt(prompt("Your Answer is :"+res));

//=====================================================================================
// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.
// A function that takes a number type variable as an argument which is the salary of a person


function findTax(salary) {
    
    let tax = 0;
    
    switch (true) {
      case salary > 0 && salary <= 500000:
        // If 500000 >= salary > 0 then 0% tax on the entire salary
        tax = 0;
        break;
      case salary > 500000 && salary <= 1000000:
        // If 1000000 >= salary > 500000 then 10% tax on the entire salary
        tax = salary * 0.1;
        break;
      case salary > 1000000 && salary <= 1500000:
        // If 1500000 >= salary > 1000000 then 20% tax on the entire salary
        tax = salary * 0.2;
        break;
      case salary > 1500000:
        // If the salary > 1500000 then 30% tax on the entire salary
        tax = salary * 0.3;
        break;
      default:
        // If the salary is not a valid number, throw an error
        throw new Error("Invalid salary");
    }
    // Return the tax amount
    return tax;
  }
  let salary=console.log(findTax( 150001));

  //=================================================================================================================
  // 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

  // let n1=6,n2=34;
  // function calculate(n1,n2){
  //   answer = (parseInt(n1/10)*parseInt(n2/10))+((n1%10)*(n2%10));
  //   console.log(answer);
  // }
  // calculate(n1,n2);