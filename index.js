// Code your solutions in this file
const names = [ 'Lisa', 'Kaitlin', 'Jan' ]
const event = 'suprise'

function writeCards(names, event) {
  let thankYouCards = []
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCards;
}
//
function countDown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countown -= 1;
  }
  console.log( countdown );
}

// function countdown( countdown ) {
//   while ( countdown > 0 ) {
//     console.log( countdown );
//     countdown -= 1;
//   }
//   console.log( countdown );
// }
