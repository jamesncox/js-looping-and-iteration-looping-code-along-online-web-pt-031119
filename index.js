// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ]
const event = 'suprise'

function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return names;
}

// 'Thank you, Lisa, for the wonderful surprise gift!'

// const gifts = ["teddy bear", "drone", "doll"];
//
// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//
//   return gifts;
// }
//
