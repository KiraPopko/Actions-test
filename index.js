// import DeckOfCards from './DeckOfCards.js';
import Hand from './Hand.js';
import CompareHands from './CompareHands.js';

// ♥♦♣♠

//let hand1 = new Hand('♥9', '♥T', '♥J', '♥Q', '♥K');
//let hand2 = new Hand('♣9', '♣T', '♣J', '♦Q', '♣K');
//console.log(CompareHands.comparer(hand1, hand2));

/*let hand1 = new Hand('♥7', '♣7', '♥2', '♥7', '♥K');
let hand2 = new Hand('♣9', '♥3', '♣9', '♦9', '♣K');
//console.log(CompareHands.numbOfOcurrences(hand1, hand2));
console.log(CompareHands.comparer(hand1, hand2));*/

let hand1 = new Hand('♥7', '♣7', '♥2', '♥7', '♥K');
let hand2 = new Hand('♣9', '♣9', '♣J', '♦Q', '♣K');
//console.log(CompareHands.numbOfOcurrences(hand1, hand2));
console.log(CompareHands.comparer(hand1, hand2));