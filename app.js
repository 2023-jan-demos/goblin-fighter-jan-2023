/* Imports */
import { renderGoblin } from './utils.js';

/* Get DOM Elements */
const goblinsEl = document.getElementById('goblins');
const playerHPEl = document.getElementById('player-hp');
const fighterImgEl = document.getElementById('fighter-img');
const inputEl = document.getElementById('goblin-input');
const buttonEl = document.getElementById('goblin-button');
const defeatedCountEl = document.getElementById('defeated-count');

/* State */
let defeatedCount = 0;
let playerHP = 10;
const goblins = [
    {
        name: 'Terry',
        hp: 5,
    },
    {
        name: 'Rob',
        hp: 2
    },
    {
        name: 'Gargantua',
        hp: 7
    }
];




/* Events */
buttonEl.addEventListener('click', () => {
    // get the name the user typed
    const goblinName = inputEl.value;

        // do not create a goblin if the name is an empty string
    if (!goblinName) {
        return;
    }    
    // make a goblin object
    const newGoblin = {
        name: goblinName,
        hp: Math.ceil(Math.random() * 6)
    };

    // push that goblin into state
    goblins.push(newGoblin);

    inputEl.value = '';

    // update DOM
    displayGoblins();
});

/* Display Functions */

function displayGoblins() {
    goblinsEl.textContent = '';
    // to display all goblins
    // 1) loop through our goblins in state
    for (let goblin of goblins) {
        // 2) make a DOM element for each goblin
        // 3) append that DOM element to the goblinsEl
        // render goblin takes in a goblin and returns a goblin element
        const newGoblinEl = renderGoblin(goblin);
    
        // this event listener will need to use state
        // therefore, it needs to live in the same file as state
        newGoblinEl.addEventListener('click', () => {

            if (playerHP <= 0) { 
                alert('you are unconscious!!');
                // return is a secret way to stop the function
                return;
            }
            // does the player hit or miss?
            // the higher the number, the harder it is to hit
            if (Math.random() > .3) {
                alert('you hit ' + goblin.name);
                goblin.hp--;
                
                if (goblin.hp === 0) {
                    defeatedCount++;
                    defeatedCountEl.textContent = `You have defeated ${defeatedCount} goblins`;
                }
            } else {
                alert('you missed ' + goblin.name);
            }

            // goes the goblin hit or miss?
            if (Math.random() > .8) {
                alert(goblin.name + 'fought back and hit you');
                playerHP--;

                if (playerHP <= 0) {
                    fighterImgEl.classList.add('unconscious');
                }
            } else {
                alert(goblin.name + 'fought back and missed you');
            }

            playerHPEl.textContent = playerHP;

            // i need to loop through and display the goblins . . .
            // wait--i have a function for that! it's called displayGoblins
            // wait . . . that's the function we're already in . . .
            // and weirdly, this works:
            displayGoblins();
        });
        // baseElement.append(newElement)
        // appending to the root DOM--stuff i hard coded in HTML
        // only this will make a mutation to the DOM
        goblinsEl.append(newGoblinEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)

displayGoblins();