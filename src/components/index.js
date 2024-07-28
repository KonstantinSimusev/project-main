import '../pages/index.css';
import { kodeks } from './kodeks';
import { grups } from './grups';
import { createQuestion } from './card';

const questionsList = document.querySelector('.questions__list');
const kodeksButton = document.querySelector('.button__kodeks');
const grupsButton = document.querySelector('.button__grups');
const buttons = document.querySelector('.buttons');

const getRandomQuestions = (questions) => {
  return questions.sort(() => Math.random() - 0.5);
}

const getQuestions = (questions) => {
  getRandomQuestions(questions).forEach(question => {
    const card = createQuestion(question, questions);
    questionsList.append(card);
  });
}

const createQuestions = (button, questions) => {
  button.addEventListener('click', () => {
    getQuestions(questions);
    buttons.remove();
  });
}

createQuestions(kodeksButton, kodeks);
createQuestions(grupsButton, grups);
