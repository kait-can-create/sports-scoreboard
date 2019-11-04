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
  document.querySelector('.team-1-score').textContent =
    parseInt(document.querySelector('.team-1-score').textContent) + 1
}

// change team one score down

const teamOneSubtractOne = () => {
  if (document.querySelector('.team-1-score').textContent >= 1) {
    document.querySelector('.team-1-score').textContent =
      parseInt(document.querySelector('.team-1-score').textContent) - 1
  }
}

// change team two score up

const teamTwoAddOne = () => {
  document.querySelector('.team-2-score').textContent =
    parseInt(document.querySelector('.team-2-score').textContent) + 1
}

// change team two score down

const teamTwoSubtractOne = () => {
  if (document.querySelector('.team-2-score').textContent >= 1) {
    document.querySelector('.team-2-score').textContent =
      parseInt(document.querySelector('.team-2-score').textContent) - 1
  }
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

// Adds one point to team two's score: event listener waits and updates only after clicking right add1 button

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', teamTwoAddOne)

// Adds one point to team two's score, so long as the score is greater than 0: event listener waits and updates only after clicking right subtract1 button

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', teamTwoSubtractOne)
