var throttle = require('lodash.throttle');
const inputForm = document.querySelector('.feedback-form');
const mailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
let dataValues = { email: "", message: ""};

inputForm.addEventListener('submit', onSubmitButtonClicK);
inputForm.addEventListener('input', throttle(onTextAreaInput, 500));
checkStorage();

function onTextAreaInput(event) {
    
  dataValues[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(dataValues));

}
function onSubmitButtonClicK(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
    console.log(dataValues);
    dataValues = { email: "", message: ""};
  
}

function checkStorage() {
    const savedData = localStorage.getItem('feedback-form-state')
    const parsedData = JSON.parse(savedData)
 
  if (localStorage.getItem('feedback-form-state')) {
      mailEl.value = parsedData.email;
      messageEl.value = parsedData.message;
      dataValues = parsedData
      
  }
}

