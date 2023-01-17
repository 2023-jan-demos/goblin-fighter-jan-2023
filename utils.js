export function renderGoblin(dataGoblin) {
    const newGoblinEl = document.createElement('li');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hpEl = document.createElement('p');

    nameEl.textContent = dataGoblin.name;
    hpEl.textContent = dataGoblin.hp;
    
    if (dataGoblin.hp > 0) {
        emojiEl.textContent = '😈';
    } else {
        emojiEl.textContent = '🔥';
    }

    newGoblinEl.classList.add('goblin');
    // here, we're mutation something we defined IN THE FUNCTION
    newGoblinEl.append(nameEl, hpEl, emojiEl);

    // why not do add event listener here? because we need to change state
    // where does state live? app.js
    // therefore, this event listener needs to live in app.js
    // newGoblinEl.addEventListener('click', () => {
    //     alert(dataGoblin.name);
    // });

    return newGoblinEl;
}