// change team one name

const teamOneUpdate = () => {
  document.querySelector('.team-1-name').textContent = document.querySelector(
    '.team-1-input'
  ).value
}

// change team two name

const teamTwoUpdate = () => {
  document.querySelector('.team-2-name').textContent = document.querySelector(
    '.team-2-input'
  ).value
}

// change team one score up

const teamOneAddOne = () => {
  if (document.querySelector('.team-1-score').textContent <= 20) {
    document.querySelector('.team-1-score').textContent =
      parseInt(document.querySelector('.team-1-score').textContent) + 1
  }
  if (document.querySelector('.team-1-score').textContent == 21) {
    disableButtons()
    displayWinner()
    document.querySelector('.reset').style.display = 'block'
    document.querySelector('.reset-button').disabled = false
  }
}

// change team one score down, not to go below zero

const teamOneSubtractOne = () => {
  if (document.querySelector('.team-1-score').textContent >= 1) {
    document.querySelector('.team-1-score').textContent =
      parseInt(document.querySelector('.team-1-score').textContent) - 1
  }
}

// change team two score up

const teamTwoAddOne = () => {
  if (document.querySelector('.team-2-score').textContent <= 20) {
    document.querySelector('.team-2-score').textContent =
      parseInt(document.querySelector('.team-2-score').textContent) + 1
  }
  if (document.querySelector('.team-2-score').textContent == 21) {
    disableButtons()
    displayWinner()
    document.querySelector('.reset').style.display = 'block'
    document.querySelector('.reset-button').disabled = false
  }
}

// Change team two score down, not to go below zero

const teamTwoSubtractOne = () => {
  if (document.querySelector('.team-2-score').textContent >= 1) {
    document.querySelector('.team-2-score').textContent =
      parseInt(document.querySelector('.team-2-score').textContent) - 1
  }
}

// When a team gets 21 points, disable the buttons

const disableButtons = () => {
  for (let i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('button')[i].disabled = true
  }
}

// When a team gets to 21 points, display a message declaring the winning team

const displayWinner = () => {
  console.log(
    document.querySelector('.team-1-name').textContent +
      ' vs ' +
      document.querySelector('.team-2-name').textContent +
      ' = ' +
      document.querySelector('.team-1-score').textContent +
      ':' +
      document.querySelector('.team-2-score').textContent
  )
  if (
    parseInt(document.querySelector('.team-1-score').textContent) >
    parseInt(document.querySelector('.team-2-score').textContent)
  ) {
    document.querySelector('.winning-team').textContent =
      document.querySelector('.team-1-name').textContent + ' Wins!'
  }
  if (
    parseInt(document.querySelector('.team-2-score').textContent) >
    parseInt(document.querySelector('.team-1-score').textContent)
  ) {
    document.querySelector('.winning-team').textContent =
      document.querySelector('.team-2-name').textContent + ' Wins!'
  }
  if (
    document.querySelector('.team-1-score').textContent ==
    document.querySelector('.team-2-score').textContent
  ) {
    document.querySelector('.winning-team').textContent = 'Tie!'
  }
}

// + Resets score to 0
// + Clears winner message
// + Clear Team names
// + Re-enable buttons
// - Reset button would disappear

const resetScoreboard = () => {
  document.querySelector('.team-1-score').textContent = '0'
  document.querySelector('.team-2-score').textContent = '0'
  document.querySelector('.winning-team').textContent = ''
  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-2-name').textContent = 'Team 2'
  for (let i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll('button')[i].disabled = false
  }
  for (let i = 0; i < document.querySelectorAll('input').length; i++) {
    document.querySelectorAll('input')[i].value = ''
  }
  document.querySelector('.reset').style.display = 'none'

  // Notes for me: above is the explanation for the expression above. i starts off as 0, 7 buttons, looking to see each time does the instance (class or tag) reappear based on is it less than 7. i++ means to add one in JS
  // document.querySelectorAll('button')[0].disabled = false
  // document.querySelectorAll('button')[1].disabled = false
  // document.querySelectorAll('button')[2].disabled = false
  // document.querySelectorAll('button')[3].disabled = false
  // document.querySelectorAll('button')[4].disabled = false
  // document.querySelectorAll('button')[5].disabled = false
  // document.querySelectorAll('button')[6].disabled = false
}
// Updates team one name only after clicking update button- event listener

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', teamOneUpdate)

// Updates team two name only after clicking update button- event listener

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', teamTwoUpdate)

// Adds one point to team one's score: event listener waits and updates only after clicking left add1 button

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', teamOneAddOne)

// Subtracts one point from team one's score, so long as the score is greater than 0: event listener waits and updates only after clicking left subtract1 button

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', teamOneSubtractOne)

// Adds one point to team two's score, up to 21: event listener waits and updates only after clicking right add1 button

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', teamTwoAddOne)

// Adds one point to team two's score, up to 21: so long as the score is greater than 0: event listener waits and updates only after clicking right subtract1 button

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', teamTwoSubtractOne)

// Resets the team score to zero

document
  .querySelector('.reset-button')
  .addEventListener('click', resetScoreboard)
