// Write a program to count the number of even ,zero and odd numbers from array

const numbers = [0,1,2,4,6,0];

var zero_c=0;
var even_c=0;
var odd_c=0;

for (let i = 0; i < numbers.length; i++) {
   
    if(numbers[i]==0){
        zero_c = zero_c + 1;
    }

    else if(numbers[i]%2==0){
        even_c = even_c + 1;
    }
    else{
        odd_c = odd_c+1;
    }
    
  }

 console.log("Even = "+even_c);
 console.log("Odd = "+odd_c);
 console.log("Zero = "+zero_c);