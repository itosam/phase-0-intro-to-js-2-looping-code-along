// for (let age = 30; age < 40; age ++){
  //age = the initialization/starting point
  //age < 40 => the condition "if age is less than 40, then continue"
  //age ++ is the iteration/what we want done to age in the loop when condition is met.

//   console.log(`I'm ${age} years old. Happy birthday to me!`)
// }

// const gifts = ['teddy bear', 'drone', 'doll'];
// function wrapGift(gifts){
//   for(let i = 1; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);

//   }
//   return gifts;
// }

//wrapGift(gifts);

// function writeCards(arrayNames, event) {
//   let cards = []
//   for ( let i = 0; i < arrayNames.length; i++) {
//     cards.push(`Thank you, ${arrayNames[i]}, for the wonderful ${event} gift!`)
    
//     return cards
//   }
// }

function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

// function countUp() {

// let countup = 0;
// while (countup < 10) {
//   console.log(countup++);
// }
// }

function countDown(number) {
 while(number > 0) {
  console.log(number);
  number -= 1;
 }
 console.log(number);
}