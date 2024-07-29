import '../pages/index.css';
import { kodeks } from './kodeks';
import { grups } from './grups';
import { createQuestion } from './card';

const questionsList = document.querySelector('.questions__list');
const kodeksButton = document.querySelector('.button__kodeks');
const grupsButton = document.querySelector('.button__grups');
const buttons = document.querySelector('.buttons');
const cleaningSection = document.querySelector('.cleaning');
const cleaningSectionButtons = cleaningSection.querySelectorAll('.form__button');
const clearButton = document.querySelector('.button__clear_all');
// const showButton = document.querySelector('.button__show_all');

let inputs = [];

const getRandomQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
}

const getQuestions = (questions) => {
  getRandomQuestions(questions).forEach(question => {
    const card = createQuestion(question, questions);
    const cardInputs = Array.from(card.querySelectorAll('.input'));
    inputs.push(...cardInputs);
    questionsList.append(card);
  });
}

const hiddenButton = (buttons) => {
  buttons.forEach(button => {
    button.classList.remove('visually-hidden');
  });
}

const createQuestions = (button, questions) => {
  button.addEventListener('click', () => {
    hiddenButton(cleaningSectionButtons);
    getQuestions(questions);
    buttons.classList.add('visually-hidden');
  });
}

createQuestions(kodeksButton, kodeks);
createQuestions(grupsButton, grups);

clearButton.addEventListener('click', () => {
  inputs.forEach(input => {
    input.checked = false;
  });
});
