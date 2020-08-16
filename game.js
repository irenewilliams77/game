
const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const SELECTIONS = [
    {
    name : 'rock',
<<<<<<< HEAD
    emoji : '🗿',
    beats : 'scissors'
},
{
    name : 'scissors',
    emoji : '✂️',
=======
    emoji :  'rock',
    beats : 'scissors',
},
{
    name : 'scissors',
    emoji :  'scissors',
>>>>>>> 3c4ba87bb7064f6fa1136f3441efded6e11a523b
    beats : 'paper'
},
{
    name : 'paper',
<<<<<<< HEAD
    emoji : '📃',
    beats : 'rock'
}
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
=======
    emoji : 'paper',
    beats : 'rock'
}
]
selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
>>>>>>> 3c4ba87bb7064f6fa1136f3441efded6e11a523b
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
<<<<<<< HEAD
});
function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    console.log(computerSelection)
=======
})
function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
// i think this needs to be strings, not vars
addSelectionResults(computerSelection, computerWins)
addSelectionResults(computerSelection, youWins) 
if (yourWinner) incrementScore(yourScoreSpan)
if (computerWinner) incrementScore(computerScoreSpan)
>>>>>>> 3c4ba87bb7064f6fa1136f3441efded6e11a523b
}
addSelectionResults(computerSelection, computerWinner);
addSelectionResults(selection, yourWinner) ;

if (yourWinner) incrementScore(yourScoreSpan);
if (computerWinner) incrementScore(computerScoreSpan);

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
};

function addSelectionResults(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('results-selection')
    if (winner)  div.classList.add('winner')
    finalColumn.after(div)
};

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
<<<<<<< HEAD
};
=======
}
>>>>>>> 3c4ba87bb7064f6fa1136f3441efded6e11a523b

    function randomSelection() {
        const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
        return SELECTIONS[randomIndex]
    };

    function winner(selection, opponent){
        return selection.beats === opponentSelection.name
    };

<<<<<<< HEAD
    


=======
>>>>>>> 3c4ba87bb7064f6fa1136f3441efded6e11a523b
function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) +1
};

function addResults(selection, winners){
const div = document.createElement('div')
div.innerText = selection.emoji 
if (winner) div.classList.add('winner')
finalColumn.after(div)
};
