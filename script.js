var cards = []
var comsName
var computers = [
    "Nick","Roger","Helsinky","Vanessa","Monroe","Paul","Jack","Amanda","Simon","Britany",
    "Henry","Michael","Steven","Danny","Hesley","Ethan"
]
var playerName
var players = new Number
var playersCards = []

// Add 52cards to array
for (var i = 0; i < 13; i++) {
    cards.push(i + 1 + "S")
}

for (var i = 0; i < 13; i++) {
    cards.push(i + 1 +"C")
}

for (var i = 0; i < 13; i++) {
    cards.push(i + 1 +"D")
}

for (var i = 0; i < 13; i++) {
    cards.push(i + 1 +"H")
}

const playerRow = document.querySelectorAll('.player-row')
const nameRow = document.querySelectorAll('.name-row')

// To create element for handle cards
function createElement(computers) {
    if (computers < 5) {
        for (var i = 0; i < computers; i++) {
            playerRow[0].innerHTML += `
            <div class="row col-2 border border-light p-2 m-0" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[0].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
        
    }   else if (computers >= 5 && computers < 10) {
        for (var i = 0; i < 4; i++) {
            playerRow[0].innerHTML += `
            <div class="row col-2 border border-light p-2 m-0" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[0].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
        for (var i = 0; i < computers - 4; i++) {
            playerRow[1].innerHTML += `
            <div class="row col-2 border border-light p-2 m-0" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[1].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
    }   else if (computers >= 10 && computers < 15) {
        for (var i = 0; i < 4; i++) {
            playerRow[0].innerHTML += `
            <div class="row col-2 border border-light p-2 m-0" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[0].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
        for (var i = 0; i < 5; i++) {
            playerRow[1].innerHTML += `
            <div class="row col-2 border border-light p-2 m-0" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[1].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
        for (var i = 0; i < computers - 9; i++) {
            playerRow[2].innerHTML += `
            <div class="row col-2 border border-light p-2 m-0" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[2].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
    }   else {
        for (var i = 0; i < 4; i++) {
            playerRow[0].innerHTML += `
            <div class="row col-2 border border-light p-2 m-0" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[0].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
        for (var i = 0; i < 5; i++) {
            playerRow[1].innerHTML += `
            <div class="row col-2 border border-light p-2 m-0" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[1].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
        for (var i = 0; i < 5; i++) {
            playerRow[2].innerHTML += `
            <div class="row col-2 border border-light p-2 m-0" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[2].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
        for (var i = 0; i < computers - 14; i++) {
            playerRow[3].innerHTML += `
            <div class="row col-2 border border-light p-2 mx-3" style="background-color: green;">
            <div class="col-2 p-0 float-start">
              <div class="flip-card" style="width: 33%;">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                    </div>
                    <div class="flip-card-back">
                      <img src="" alt="">
                    </div>
                  </div>
                </div>
            </div>
            <div class="col-2 p-0 mx-auto">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-2 p-0 float-end">
                <div class="flip-card" style="width: 33%;">
                    <div class="flip-card-inner">
                      <div class="flip-card-front">
                        <img style="height: 5rem;" src="./assets/img/back-card.jpg" alt="BackCard">
                      </div>
                      <div class="flip-card-back">
                        
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-1">
              
            </div>
          </div>
            `
            nameRow[3].innerHTML += `
                <div class="col-2 text-center">
                    <h5 class="computers-name"></h5>
                </div>
            `
        }
    }
}

// To random something
function random(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// Shuffle the computers name
function randomComputersName(arr,output)  {
    let newArr = arr
    random(newArr)
    output.forEach((item,index) => {
        item.innerHTML =  `${newArr[index]} <span class="score"></span>`
    })
    return newArr
}

// Shuffle cards list
function shuffleDealCards(players) {
    var setCards = cards
    random(setCards)
    var length = setCards.length
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < players; j++) {
            playersCards[j].push(setCards[length-(players*i)-j-1])
        }
    }
    return playersCards
}

// Calculate the result of every players
function calculatePoints(array) {
    var total = []
    var triple = []
    
    array.map((item,index) => {
      var a = 0
      for (var i = 0; i < 3; i++) {


        if (item[i].length == 2) {
          a += parseInt(item[i].slice(0,1))
        } else if (item[i].length == 3 && item[i].slice(0,2) == 10) {
          a += parseInt(item[i].slice(0,2))
        } else {
          a += 10
        }
        
        
      }

      if (parseInt(item[0].slice(0,2)) > 10 && parseInt(item[1].slice(0,2)) > 10 && parseInt(item[2].slice(0,2)) > 10) {
        a = 99
      }

      total.push(a)
    })

    return total
}
document.querySelector('.reset-button').disabled = true

document.querySelector('.play-button').addEventListener('click', () => {
    const showCards = document.querySelectorAll('.flip-card-back')
    const animation = document.querySelectorAll('.flip-card-inner')
    for (var i = 0; i < players; i++) {
        playersCards.push([])
    }
    let cardList = shuffleDealCards(players)
    animation.forEach(item => {
        item.classList.add('active')
    })

    showCards.forEach((showCard,index) => {
        showCard.innerHTML = `<img style="height: 5rem;" src="./assets/img/${cardList[Math.floor(index/3)][index%3]}.png" alt="" />`
    })
    
    let score = calculatePoints(cardList)

    let scorePoints = document.querySelectorAll('.score')
    scorePoints.forEach((point,index) => {
      var last 
      if (score[index] == 99) {
        last = '3 Tây'
      } else if (score[index] % 10 == 0) {
        last = 'Bù'
      } else {
        last = score[index] % 10
      }

      point.innerText = "-" + " " + last
    })

    let otherPlayers = []
    let allScore = [document.querySelector('.player-name').innerText.slice(document.querySelector('.player-name').innerText.lastIndexOf(' ') + 1)]

    comsName.forEach(name => {
      var a = name.innerText.slice(0, name.innerText.indexOf(' '))
      otherPlayers.push(a)
      allScore.push(name.innerText.slice(name.innerText.lastIndexOf(' ') + 1))
    })
    let resultName = [playerName,...otherPlayers]
    let resultPoint = score
    let resultTable = []
    
    for (var i = 0; i < resultPoint.length; i++) {
      let a
      if (resultPoint[i] != 99) {
        resultPoint[i] = resultPoint[i] % 10
      }
    }
 
    for (var i = 0; i < allScore; i++) {
      if (allScore[i] == 'Tây') {
        console.log(1);
        allScore[i] = 99
      } else if (allScore[i] == 'Bù') {
        console.log(2);
        allScore[i] = 0
      } else {
        console.log('br');
      }
      return allScore
    }

    for (var i = 0; i < resultPoint.length; i++) {
      if (resultPoint[i] == 99) {
        resultTable.push(resultName[i])
      }
    }

    for (var i = 9; i >= 0; i--) {
      for (var j = 0; j < resultPoint.length; j++) {
        if (resultPoint[j] == i) {
          resultTable.push(resultName[j])
        }
      }
    }
    const playerPoints = document.querySelectorAll('.players-point')

    playerPoints.forEach((playerPoint,index) => {
      playerPoint.innerHTML += `<div>${resultTable[index]}</div>`
    })


    let name = [document.querySelector('.player-name'),...document.querySelectorAll('.computers-name')]
    
    document.querySelector('.play-button').disabled = true
    document.querySelector('.reset-button').disabled = false
})

document.querySelector('.reset-button').addEventListener('click', () => {
    const animation = document.querySelectorAll('.flip-card-inner')
    animation.forEach(item => {
        item.classList.remove('active')
    })
    const playerPoints = document.querySelectorAll('.players-point')

    playerPoints.forEach((playerPoint,index) => {
      var a = index + 1
      switch(a) {
        case 1:
          playerPoint.innerHTML = `${a}<sup>st</sup>`
          break;
        case 2:
          playerPoint.innerHTML = `${a}<sup>nd</sup>`
          break;
        case 3:
          playerPoint.innerHTML = `${a}<sup>rd</sup>`
          break;
        default:
          playerPoint.innerHTML = `${a}<sup>th</sup>`
          break;
      }
    })
    playersCards = []
    document.querySelector('.play-button').disabled = false
    document.querySelector('.reset-button').disabled = true
})

document.querySelector('.start-game').addEventListener('click', () => {
    var comsNum = parseInt(document.querySelector('#computers').value)
    playerName = document.getElementById('player-name').value
    var isValid

    if (comsNum > 0 || comsNum < 17) {
      isValid = true
    } else {
      isValid = false
    }
    console.log();
    if (!isValid) {
      alert('Please enter number of computers')
      comsNum = ''
    } else {
      if (!playerName) {
        alert('Please enter your name')
      } else {
        players = comsNum + 1
        createElement(comsNum)

        comsName = document.querySelectorAll('.computers-name')
        document.querySelector('.game-intro').classList.remove('d-flex')
        document.querySelector('.game-intro').classList.add('d-none')
        document.querySelector('.game-layout').classList.remove('d-none')
        document.querySelector('.game-layout').classList.add('d-flex')
        randomComputersName(computers,comsName)
        document.querySelector('.player-name').innerHTML = `${playerName} <span class="score"></span>`
        const tableOutput = document.querySelector('.table-points')
        for (var i = 1; i < players + 1; i++) {
          switch(i) {
            case 1:
              tableOutput.innerHTML += `<li style="width: 3.5rem; height: 2rem;" class="players-point d-inline-block mx-2 my-3">${i}<sup>st</sup></li>`
              break;
            case 2:
              tableOutput.innerHTML += `<li style="width: 3.5rem; height: 2rem;" class="players-point d-inline-block mx-2 my-3">${i}<sup>nd</sup></li>`
              break;
            case 3:
              tableOutput.innerHTML += `<li style="width: 3.5rem; height: 2rem;" class="players-point d-inline-block mx-2 my-3">${i}<sup>rd</sup></li>`
              break;
            default:
              tableOutput.innerHTML += `<li style="width: 3.5rem; height: 2rem;" class="players-point d-inline-block mx-2 my-3">${i}<sup>th</sup></li>`
              break;
          }
        }
    }  
    }

    
})