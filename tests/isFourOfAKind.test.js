import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';

// Will fail since no code written in Compare Hands yet for the method
// isThreeOfAKind
test('Test that threeOfAKind returns truthy is three of a kind', () => {
  let hand = new Hand('♥7', '♦7', '♣7', '♠3', '♠7');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('Test that threeOfAKind returns truthy is three of a kind', () => {
    let hand = new Hand('♥7', '♦7', '♣8', '♠3', '♠7');
    expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
  });

test('check that isfourOfAKind returns a higher score for a stronger hand (if two hands but with three of a kind)', () => {
  let hand1 = new Hand('♣2', '♣2', '♣2', '♣2', '♦4');
  let hand2 = new Hand('♦3', '♦3', '♦3', '♠3', '♦5');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});