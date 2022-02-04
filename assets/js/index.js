let arr
const player_1 = 'X'
const player_2 = 'O'

currentPlayer = player_1
const allBoxes = document.querySelectorAll('.box')

const winningCombo =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

startGame()

function startGame(){
    arr = Array.from(Array(9).keys())
    console.log(arr)
    for (let i = 0; i < 9; i++){
        allBoxes[i].innerText = ''
        allBoxes[i].addEventListener('click', boxClicked, false)
    }
}

function boxClicked(ele) {
    turn(ele.target.id, player_1)
}

function turn(eleId, player){
    arr[eleId] = player
    document.getElementById(eleId).innerText = player
    let gameWon = checkGameWon(arr, player)
    if (gameWon) gamerOver(gameWon)
}

function checkGameWon(arr, player)







