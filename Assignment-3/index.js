// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.
//=======================================================================================

// let states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

// // Remove all the names starting with vowels from the list
// vowels = ['A','E','I','O','U'];
// // vowels2 =['a','e','i','o','u'];
// result=states.filter(state =>{
//     if(!vowels.includes(state[0])){
//         return state;
//     }
// })
// console.log(result);

//=============================================================================================
// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.


// function reverseWords(input) {
//     const characters = input.split(' ');
//     const reversedCharacters = characters.reverse();
//     const reversedString = reversedCharacters.join(' ');
//     return reversedString;
//   }
//   let str = "I love my India";
//   let output = reverseWords(str);
//   console.log( output);

//=======================================================================================================

//   Q3) let string = 'INDIA'
//   output = 'INDONESIA'
//   Use array.splice

// let string = 'INDIA';

// let stringArray = string.split('');
// console.log(stringArray)
// let substring = 'ONES';
// let insertIndex = 3;
// stringArray.splice(3,0, substring);
// let result = stringArray.join('');
// console.log(result);


//=======================================================================================================

// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

// function countConsonantsAndVowels(str) {
//     str = str.toLowerCase();//it is use for to count upercase letter
//     let vowelCount = 0;
//     let consonantCount = 0;
//     let otherCount=0;

//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//         vowelCount++;
//       } 
//       else if (char > 'a' && char <= 'z') {
//         consonantCount++;
//       }
//       else{
//         otherCount++;
//       }
//     }

//     return { vowelCount, consonantCount ,otherCount};
//   }

//   const inputString = 'I am learning MERN From Hashedbit';
//   const counts = countConsonantsAndVowels(inputString);

//   console.log('Vowel Is:', counts.vowelCount);
//   console.log('Consonant Is:', counts.consonantCount);
//   console.log('Other Is:', counts.otherCount);

  //============================================================================================

//   Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

// function correctfn(string, wrong, correct) {
//     let newString = string.replace(new RegExp(wrong), correct);
//     return newString;
//   }
//   let string = "This is a sentance";
//   let wrong = "sentance";
//   let correct = "Correct";
//   let result = correctfn(string, wrong, correct);
//   console.log(result); 
  
// ======================================================================================================

// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

// let inputArr = [1,2,3,9,10,7,5,4,3];
// let answer = inputArr.filter(inputArr => inputArr > 5);
// console.log(answer);

//=======================================================================================================

// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

// const students = [
//     { name: "Ram", scores: [80, 70, 60] },
//     { name: "Mohan", scores: [80, 70, 90] },
//     { name: "Sai", scores: [60, 70, 80] },
//     { name: "Hemang", scores: [90, 90, 80, 80] },
//     ];

//     const output = students.map(student => ({
//         name: student.name,
//         average: student.scores.reduce((add, score) => add + score, 0) / student.scores.length,
//     }));
// console.log(output);

//=============================================================================================================

// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.


// function singleSumOfDigits (num) {
//     let digits = num.toString ().split ("");
//     let sum = 0;
//     for (let digit of digits) {
//       sum += parseInt (digit);
//     }
//     if (sum > 9) {
//       return singleSumOfDigits (sum);
//     }
//     else {
//       return sum;
//     }
//   }
  
//   console.log (singleSumOfDigits (456)); 
//   console.log (singleSumOfDigits (99));
//   console.log (singleSumOfDigits (419)); 

//=============================================================================================================

// Q9) Write a function to count the number of words in a paragraph.

// let paragraph=" Write a function to  count  the number of words in a paragraph."
// const words = paragraph.split(' ');
// const filteredWords = words.filter(word => word.length > 0);
// console.log(filteredWords)
// console.log("Number of words is :",filteredWords.length)

//=============================================================================================================

// Q10) Write a function to reverse a string.
// Input - Hello
// Output - olleH

// function reverseString(input) {
//     const characters = input.split('');
//     const reversedCharacters = characters.reverse();
//     const reversedString = reversedCharacters.join('');
//     return reversedString;
//   }
//   const input = "Hello";
//   const output = reverseString(input);
//   console.log( output);

//=============================================================================================================

// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

const students=[
    {student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    },
    {student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
        }
    }
]


let output=students.map((studentD)=>{
    let studentName=Object.keys(studentD)
    let scores=Object.values(studentD[studentName])
    const average=scores.reduce((sum,score)=>sum+score,0)/scores.length
    return {[studentName]:{average}}
})

console.log(output);
