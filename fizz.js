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

Start();

function Go(){
    const count = [];
  
    for (let i = 100; i <= 0; i++) {
        count.push(i)
    console.log(count)
}
}
Go();

function Start(){
    const prime = [];
  
    for (let i = 0; i <= 50; i++) {
      if (i % 1 === 0 && i % i === 0) {
        prime.push('Prime');
    }
      else{
        prime.push('Not Prime');
      }
    }
    console.log(prime)
}

Start();