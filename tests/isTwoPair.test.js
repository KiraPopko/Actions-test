import { expect, test } from 'vitest';
import Hand from '../Hand.js';
import CompareHands from '../CompareHands.js';

const suits = '♥♦♣♠';


test('check that isTwoPair returns falsey if not twopair', () => {
  let hand = new Hand('♣2', '♣5', '♥2', '♦6', '♣7');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPair returns a higher score for a stronger hand', () => {
  let hand1 = new Hand('♥2', '♣7', '♦2', '♥7', '♥K');
  let hand2 = new Hand('♦T', '♦9', '♦5', '♣8', '♦A');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand1Score).toBeGreaterThan(hand2Score);
});