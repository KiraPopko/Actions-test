export default class CompareHands {

  static suits = '♥♦♣♠';
  static ranks = '23456789TJQKA';

  // return the winning hand
  static comparer(hand1, hand2) {

    let comparers = [
      'isStraightFlush',
      'isFourOfAKind',
      'isFullHouse',
      'isFlush',
      'isStraight',
      'isThreeOfAKind',
      'isTwoPair',
      'isOnePair',
      'isHighestCard'
    ];

    for (let comparer of comparers) {
      let hand1Score = this[comparer](hand1);
      let hand2Score = this[comparer](hand2);
      console.log(comparer, 'hand1Score', hand1Score, 'hand2Score', hand2Score);
      // nobody has this kind combination - continue to next comparer
      if (hand1Score === 0 && hand2Score === 0) { continue; }
      // at least has one hand has this kind of combination
      // which hand won?
      if (hand1Score === hand2Score) { return [hand1, hand2]; }
      else if (hand1Score > hand2Score) { return hand1; }
      else { return hand2; }
    }

  }

  static isStraightFlush(hand) {
    // if not straight or not flush -> 0
    // otherwise score of flush
    return this.isStraight(hand) && this.isFlush(hand);
  }

  static isFourOfAKind(hand) { // TODO!
    this.sortByRank(hand);
    let ranks = this.numbOfOcurrences(hand);
    let values = Object.values(ranks);

    if (values.includes(4) && values.indexOf(4) === values.lastIndexOf(4)) {
      return this.rankToPoint(Object.keys(ranks)[values.indexOf(4)])
    }
    return 0;

  }
  

  static isFullHouse(hand) { // TODO!
    return 0;
  }

  static isFlush(hand) {
    let suits = [];
    for (let card of hand.cards) {
      suits.push(card.suit);
    }
    // not a flush -> 0
    if ([...new Set(suits)].length !== 1) {
      return 0;
    }
    // return points depending of strength of flush
    this.sortByRank(hand);
    let score = 0, counter = 0;
    for (let card of hand.cards) {
      score += this.rankToPoint(card.rank) * 10 ** counter;
      counter += 2;
    }
    return score;
  }

  static isStraight(hand) {
    // sort from low to high
    this.sortByRank(hand);
    // get the ranks of the cards
    let ranks = '';
    for (let card of hand.cards) {
      ranks += card.rank;
    }
    // if both 2 and A then place A first
    if (ranks.includes('2') && ranks.includes('A')) {
      ranks = 'A' + ranks.slice(0, 4);
    }
    // not a straight -> 0
    if (!('A' + this.ranks).includes(ranks)) { return 0; };
    // return points depending on strength of straight
    return this.rankToPoint(ranks[4]);
  }

  static isThreeOfAKind(hand) { 
    //Sorterart korten på hand
    this.sortByRank(hand);
    let ranks = this.numbOfOcurrences(hand);
    let values = Object.values(ranks);

    if (values.includes(3) && values.indexOf(3) === values.lastIndexOf(3)) {
      return this.rankToPoint(Object.keys(ranks)[values.indexOf(3)])
    }
    return 0;

  }

  static isTwoPair(hand) { // TODO!
    return 0;
  }

  static isOnePair(hand) { // TODO!
    return 0;
  }

  static isHighestCard(hand) { // TODO!
    return 0;
  }

  // helper functions below:

  static numbOfOcurrences(hand) {
    let ranks = {};
    for (let card of hand.cards) {
      ranks[card.rank] = ranks[card.rank] || 0;
      ranks[card.rank]++;
    }
    return ranks;
  }

  static rankToPoint(rank) {
    return this.ranks.indexOf(rank) + 2;
  }

  static sortByRank(hand) {
    hand.cards = hand.cards.sort((a, b) => {
      return this.rankToPoint(a.rank) < this.rankToPoint(b.rank) ?
        -1 : 1;
    });
  }


}