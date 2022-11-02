//import fruits and helpers
/* TODO:
    randomly draw fruit from arr
    log "i'd like a __ pls" 
    log "here ya go: __"
    log "delicious, dame otra?"
    remove fruit from arr of fruits
    log "sorry, all out - we have _______ left"
*/

import foods from './foods';
import { choice, remove } from './helpers';

let fruit = choice(foods);

console.log(`I'd like one ${fruit}, please.`);
console.log(`Here ya go: ${fruit}.`);
console.log(`Delicious, dame otra!`);

let fruitsLeft = remove(fruit, foods);

console.log(`Sorry, we're all out. We have ${fruitsLeft.length} other fruits left.`);