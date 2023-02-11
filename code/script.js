// Variables that point to selected DOM elements
const chat = document.getElementById('chat')
const sendBtn = document.getElementById('sendBtn')
const nameForm = document.getElementById('nameForm')
const nameInput =document.getElementById('nameInput') 



// Declare username as a global variable
let username

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    console.log ('User is replyng')
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user_bot.png" alt="User" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    console.log ('Bot asking question')
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/laundry_bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
}



// Chat starting here when bot greets user
const greetUser = () => {
  showMessage("Hi there, what´s your name?", 'bot')
}

//User types in Name and a massage is shown with the users name
const handleNameInput = (event) => {
  event.preventDefault()
  console.log('Här ska vi ta hand om namnet')
  console.log(nameInput.value) 
  showMessage(nameInput.value, 'user')
  //setCustomValidity('Oops, you forgot this field!')

  // Save thee username for later
  username = nameInput.value 
//Empty input
  nameInput.value = ''
//Callback
  setTimeout(() => nameAnswer() , 1000)
}

  // Bot answer "Hi 'name', what a lovley day for laundry" + ny fråga  
const nameAnswer = () => {
  showMessage(`Hi ${username}, what a lovley day for laundry! 🧺 ` ,'bot') 
  setTimeout(() => colorQuestion() , 2500)
}

const colorQuestion = () => {
  showMessage ('What kind of laundry will you be doing today?' , 'bot')
  inputWrapper.innerHTML = `
  <button id='darkBtn'> Dark</button>
  <button id='whiteBtn'> White</button>
  <button id='mixedBtn'> Mixed</button>
  `
  document.getElementById('darkBtn')
    .addEventListener('click', () => {
    showMessage('Dark' , 'user')
    setTimeout(() => tempQuestion('Dark'), 1000)})
  
    document.getElementById('whiteBtn')
    .addEventListener('click', () => {
    showMessage('White' , 'user')
    setTimeout(() => tempQuestion('White'), 1000)})
  
    document.getElementById('mixedBtn')
    .addEventListener('click', () => {
    showMessage('Mixed' , 'user')
    setTimeout(() => tempQuestion('Mixed'), 1000)})
}

const tempQuestion = (color) => {
  if (color === 'Dark') {
    showMessage (`Well ${username}, dark it is! Choose you temperature below!`, 'bot')
    setTimeout(() => tempSelection(), 1000)
  } else if (color === 'White') {
    showMessage (`Let´s do some white laundry ${username}. At what temp?`, 'bot')
    setTimeout(() => tempSelection(), 1000)
  } else {
    showMessage (`WOW, that´s daring ${username}. Chose your temp and give it a try`, 'bot')
    setTimeout(() => tempSelection(), 1000)
  }
}
const tempSelection = () => {
  inputWrapper.innerHTML = `
  <select id="selectTemp">
    <option value="" selected disabled>🌡️</option>
    <option value="30">30°</option>
    <option value="40">40°</option>
    <option value="60">60°</option>
  </select>
  `
const select=
document.getElementById('selectTemp')
.addEventListener('change', () => {
showMessage(selectTemp.value + '°', 'user')

  if (selectTemp.value === '30') {
    setTimeout(() =>
    showMessage (`OK ${username}, some sensitive laundry in the making!`, 'bot'), 1000)
  } else if (selectTemp.value === '40') {
    setTimeout(() =>
    showMessage (`That´s cool ${username}!`, 'bot'), 1000)
  } else {
    setTimeout(() =>
    showMessage (`Dirty laundry ${username}, in for washing!`, 'bot'), 1000)
  }

  setTimeout(() => tumbleQuestion(), 3000)
})
}

const tumbleQuestion = () => {
  showMessage (`${username}, will you be using the tumbledryer?`, 'bot')
  inputWrapper.innerHTML = `
  <button id='yesBtn'> Yes</button>
  <button id='noBtn'> No</button>
  `
  document.getElementById('yesBtn')
    .addEventListener('click', () => {
    showMessage('Yes' , 'user')
    setTimeout(() => timeSet('Yes'), 1000)})
  
    document.getElementById('noBtn')
    .addEventListener('click', () => {
    showMessage('No' , 'user')
    setTimeout(() => timeSet('No'), 1000)})
}

const timeSet = (tumbleAnswer) => {
  if (tumbleAnswer === 'Yes') {
    showMessage ('Washing and tumbledrying will be aprox 2 h' ,'bot')
    setTimeout(() =>  
    showMessage ('Room 1' , 'bot'), 2000)
    setTimeout(() =>  
    showMessage ('Enter code: 112233' , 'bot'), 2000)
  } else {
    showMessage ('Only washing will be aprox 1 h' ,'bot')
    setTimeout(() =>  
    showMessage ('Room 2' , 'bot'), 2000)
    setTimeout(() =>  
    showMessage ('Enter code: 223344' , 'bot'), 2000)
  }

  setTimeout(() => lastQuestion(), 3000)
}

const lastQuestion = () => {

}


// Set up your eventlisteners here

nameForm.addEventListener('submit', handleNameInput)

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
  setTimeout(greetUser, 1000)
