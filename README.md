## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)


## HTML Setup
- static (stuff we type in index.html)
    - input / button
    - fighter image
    - defeated goblins el
    - player health points el
    - an el to append our goblin el into
- dynamic (stuff we append in app.js)
    - goblin divs
        - name el
        - emoji el
        - health points el
## State
- player health points
- goblins
    - health points
- defeated goblins counter

is any of this state redundant?

(we don't track isPlayerFlipped -- that is DERIVED state)
(hide and seek: wins, losses, total -> what's wrong with tracking all three? we only need two. if we track wins and total, then losses is just total minus wins. DERIVED state is state that can be calculated based on other state)

## Events
- the only thing that ever happens in events is: the state changes, then the view updates.

- user clicks the "challenge goblin" button
    - state change:
        - we make a goblin with the name from the input and assign that goblin a random number for health points
        - we push that goblin into an array
    - view change:
        - a new goblin element shows up on the page 

- user clicks an individual goblin el
    - state change:
        - either the user hits or misses
        - either the goblin hits or misses
        - depending on who hit or miss, we change player HP and the HP of this goblin
    - view change:
        - update HP for goblin el
        - update EMOJI for goblin el (maybe)
        - update player HP el
        - update player image (maybe)
        - (launch some alerts)
        - update defeated goblins el

## Features / Slices / User stories
- stop starting, start finishing
- that means, work one feature at a time
- build a skateboard. at least it's a vehicle
- good devs shepherd their app from one working state to another, over and over

- user should be able to . . .
    1) see their fighter's initial image/HP -->
    2) see the list of goblins (we start with initial goblins)
    3) fight a goblin and see the results of the fight change the page (new player HP, new goblin HP, etc) 
        - why is this before step 4? we need this complexity to work before we know if step 4 works
    4) add a new goblin to the list of goblins
    5) see how many goblins they've defeated
        - make some static HTML for this data
        - initialize goblins defeated state to 0
        - on click, if goblin's HP is zero, increment goblins defeated state
            - update the view to show the new goblins defeated state
