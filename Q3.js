function reverse_digit(number)
{
    var rev=0,rem=0;

    while(number>0){
        rev = rev*10+number%10;
        number = Math.floor(number/10);
    }

    return rev;

    
}


console.log(reverse_digit(123));
