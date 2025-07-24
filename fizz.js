function Start(){
    const numbers = [];
  
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0) {
        numbers.push('Fizz');
      } else if (i % 5 === 0){
        numbers.push('Buzz');
      }
      else if (i % 5 === 0 && i % 5 === 0){
        numbers.push('Fizz Buzz');
      }
      else{
        numbers.push('_');
      }
    }
    console.log(numbers)
}