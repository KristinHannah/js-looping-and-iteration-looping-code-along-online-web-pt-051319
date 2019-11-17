// Code your solutions in this file
  const cards = []
function writeCards(array, eventName) {
  for(let i = 0; i < array.length; i++){
   cards.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
  }
  return cards 
}

function countDown(num){
<<<<<<< HEAD
  while (num > -1) {
    console.log(num);
    num--;
=======
  while(num > 0){
    console.log(num);
    let num = num -1;
>>>>>>> 26658518aa61363b04c1d65dd8e9dc331add6992
  }
}