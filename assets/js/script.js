let count = 1

let message = document.getElementById('message')

gameSet = (ele) => {
    var x = ele.getAttribute('data-id')
    var y = document.getElementById(ele.id)
    if (count <= 9) {

        if (x === '0') {

            if (count % 2 == 0) {
                y.innerText = 'O'
                ele.setAttribute('data-id', '1')
                message.innerText = 'Player X turn!'
            } else {
                y.innerText = 'X'
                ele.setAttribute('data-id', '1')
                message.innerText = 'Player O turn!'
            }
            if (count > 4) {
                if ((div1.innerText === 'X' && div2.innerText === 'X' && div3.innerText === 'X') || (div4.innerText === 'X' && div5.innerText === 'X' && div6.innerText === 'X') || (div7.innerText === 'X' && div8.innerText === 'X' && div9.innerText === 'X') || (div1.innerText === 'X' && div5.innerText === 'X' && div9.innerText === 'X') || (div3.innerText === 'X' && div5.innerText === 'X' && div7.innerText === 'X') || (div1.innerText === 'X' && div4.innerText === 'X' && div7.innerText === 'X') || (div2.innerText === 'X' && div5.innerText === 'X' && div8.innerText === 'X') || (div3.innerText === 'X' && div6.innerText === 'X' && div9.innerText === 'X')) {
                    message.innerText = "Player 'X' Won!"
                    count = 9
                    resetAll()
                } else if ((div1.innerText === 'O' && div2.innerText === 'O' && div3.innerText === 'O') || (div4.innerText === 'O' && div5.innerText === 'O' && div6.innerText === 'O') || (div7.innerText === 'O' && div8.innerText === 'O' && div9.innerText === 'O') || (div1.innerText === 'O' && div5.innerText === 'O' && div9.innerText === 'O') || (div3.innerText === 'O' && div5.innerText === 'O' && div7.innerText === 'O') || (div1.innerText === 'O' && div4.innerText === 'O' && div7.innerText === 'O') || (div2.innerText === 'O' && div5.innerText === 'O' && div8.innerText === 'O') || (div3.innerText === 'O' && div6.innerText === 'O' && div9.innerText === 'O')) {
                    message.innerText = "Player 'O' Won!"
                    count = 9
                    resetAll()
                }
            }
            count++

        }
    } else {
        message.innerText = 'Match Drawn!'
        resetAll()
    }
}


resetAll = () => {
    setTimeout(() => {
    count = 1
    for (let i = 1; i <= 9; i++) {
        var z = document.getElementById('box' + i)
        z.innerHTML = ''
        z.setAttribute('data-id', '0')

    }
    message.innerText = 'Start Game!'
},1000)
}


let div1 = document.getElementById('box1')
let div2 = document.getElementById('box2')
let div3 = document.getElementById('box3')
let div4 = document.getElementById('box4')
let div5 = document.getElementById('box5')
let div6 = document.getElementById('box6')
let div7 = document.getElementById('box7')
let div8 = document.getElementById('box8')
let div9 = document.getElementById('box9')