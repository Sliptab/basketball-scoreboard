let homeScoreText = document.getElementById('home__score')
let awayScoreText = document.getElementById('away__score')
let homeScore = 0
let awayScore = 0

/* HOME SCORES */

function addOneHome() {
  homeScore++

  if (homeScore < 10) {
    homeScoreText.textContent = "00" + homeScore
  } else if (homeScore >= 10  && homeScore < 100) {
    homeScoreText.textContent = "0" + homeScore
  } else {
    homeScoreText.textContent = "" + homeScore
  }
}

function addTwoHome() {
  homeScore += 2

  if (homeScore < 10) {
    homeScoreText.textContent = "00" + homeScore
  } else if (homeScore >= 10  && homeScore < 100) {
    homeScoreText.textContent = "0" + homeScore
  } else {
    homeScoreText.textContent = "" + homeScore
  }
}

function addThreeHome() {
  homeScore += 3

  if (homeScore < 10) {
    homeScoreText.textContent = "00" + homeScore
  } else if (homeScore >= 10  && homeScore < 100) {
    homeScoreText.textContent = "0" + homeScore
  } else {
    homeScoreText.textContent = "" + homeScore
  }
}

/* AWAY SCORES */

function addOneAway() {
  awayScore++

  if (awayScore < 10) {
    awayScoreText.textContent = "00" + awayScore
  } else if (awayScore >= 10  && awayScore < 100) {
    awayScoreText.textContent = "0" + awayScore
  } else {
    awayScoreText.textContent = "" + awayScore
  }
}

function addTwoAway() {
  awayScore += 2

  if (awayScore < 10) {
    awayScoreText.textContent = "00" + awayScore
  } else if (awayScore >= 10  && awayScore < 100) {
    awayScoreText.textContent = "0" + awayScore
  } else {
    awayScoreText.textContent = "" + awayScore
  }
}

function addThreeAway() {
  awayScore += 3

  if (awayScore < 10) {
    awayScoreText.textContent = "00" + awayScore
  } else if (awayScore >= 10  && awayScore < 100) {
    awayScoreText.textContent = "0" + awayScore
  } else {
    awayScoreText.textContent = "" + awayScore
  }
}