//Anonymous function

//1.Printing odd numbers in an array
let arr=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }
  arr([2,3,4,5,6])
//2.Convert all the strings to title caps in a string array
let string=function (str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        console.log(str[i])
      }
     

    }
    string(["MY naMe IS"])
//3.Sum of all numbers in an array 
let Sum=function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum += array[i];
       console.log(sum)
     }
     return sum;
  }
  Sum([3,4,5,6,1])
//4.Return all the prime numbers in an array
let PrimeNo=function(numArray){
        numArray = numArray.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
          }
          return true;
        });
        console.log(numArray);
    }
    PrimeNo([3,17,19,4,9])
//5.Return all the palindromes in an array
function isPalindrome(N)
{
let str = "" + N;
let len = str.length;
for (let i = 0; i < parseInt(len / 2, 10); i++)
{
if (str[i] != str[len - 1 - i ])
  return false;
}
return true;

}
let Palindrome=function (arr, n)
{
for (let i = 0; i < n; i++)
{
let ans = isPalindrome(arr[i]);
if (ans == false)
  return false;
}
return true;
}
console.log(Palindrome([121,444,676],3))

//IIFE -> Immediately Invoked Function Expression

//1.Printing odd numbers in an array
(function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  })([2,3,4,5,6])
//2.Convert all the strings to title caps in a string array
(function (str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        console.log(str[i])
      }
     

    })(["MY naMe IS"])
//3.Sum of all numbers in an array
(function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum += array[i];
       console.log(sum)
     }
     return sum;
  })([3,4,5,6,1])
//4.Return all the prime numbers in an array
(function(numArray){
numArray = numArray.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
}
return true;
});
console.log(numArray);
})([3,17,19,4,9])
//5.Return all the palindromes in an array
function isPalindrome(N)
{
let str = "" + N;
let len = str.length;
for (let i = 0; i < parseInt(len / 2, 10); i++)
{
if (str[i] != str[len - 1 - i ])
return false;
}
return true;

}
(function (arr, n)
{
for (let i = 0; i < n; i++)
{
let ans = isPalindrome(arr[i]);
if (ans == false)
return false;
}
return true;
})([121,444,676],3)

//Arrow function
//1.Printing odd numbers in an array
oddNumbers = (array) => {
for(var i = 0 ; i< array.length ; i++){
if(array[i]%2!=0){
console.log(array[i])
} 
}
}
oddNumbers([2,3,45,6])
//2.Convert all the strings to title caps in a string array
titleCase = (str) => {
str = str.toLowerCase().split(' ');
for (var i = 0; i < str.length; i++) {
str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
} 
return str.join(' ');
}
titleCase(["MY naMe IS"])
//3.Sum of all numbers in an array
Sum = (array)=>{
var sum = 0;
for(var i = 0 ; i< array.length ; i++){
sum += array[i];
console.log(sum)
}
return sum;
}
Sum([2,3,4,5,6])
//4.Return all the prime numbers in an array
primeNumber = (numArray) => {
numArray = numArray.filter((number) => {
for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
}
return true;
});
console.log(numArray);
}
primeNumber([3,17,19,4,9])
//5.Return all the palindromes in an array
function isPalindrome(N)
{
let str = "" + N;
let len = str.length;
for (let i = 0; i < parseInt(len / 2, 10); i++)
{
if (str[i] != str[len - 1 - i ])
return false;
}
return true;

}
Palindrome = (arr, n) =>
{
// Traversing each element of the array
// and check if it is palindrome or not
for (let i = 0; i < n; i++)
{
let ans = isPalindrome(arr[i]);
if (ans == false)
  return false;
}
return true;
}
console.log(Palindrome([121,444,676],3))






