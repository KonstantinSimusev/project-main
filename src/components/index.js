import '../pages/index.css';
import { kodeks } from './kodeks';
import { createQuestion } from './card';

const questionsList = document.querySelector('.questions__list');
const kodeksButton = document.querySelector('.button__kodeks');

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
  button.addEventListener('click', (evt) => {
    getQuestions(questions);
    evt.target.remove();
  });
}

createQuestions(kodeksButton, kodeks);
