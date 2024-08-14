import '../pages/index.css';

import { all } from './data/all';
import { kodeks } from './data/kodeks';
import { grups } from './data/grups';
import { technology } from './data/technology';
import { management } from './data/management';
import { smk } from './data/smk';
import { ot } from './data/ot';
import { tkrf } from './data/tkrf';
import { production } from './data/production';
import { machine } from './data/machine';
import { electro } from './data/electro';
import { lpc_5 } from './data/lpc_5';
import { lpc_11 } from './data/lpc_11';
import { economic } from './data/economic';

import { createQuestion } from './card';

const questionsList = document.querySelector('.questions__list');

const allButton = document.querySelector('.button__all');
const kodeksButton = document.querySelector('.button__kodeks');
const grupsButton = document.querySelector('.button__grups');
const technologyButton = document.querySelector('.button__technology');
const managementButton = document.querySelector('.button__management');
const smkButton = document.querySelector('.button__smk');
const otButton = document.querySelector('.button__ot');
const tkrfButton = document.querySelector('.button__tkrf');
const productionButton = document.querySelector('.button__production');
const machineButton = document.querySelector('.button__machine');
const electroButton = document.querySelector('.button__electro');
const economicButton = document.querySelector('.button__economic');
const lpc5Button = document.querySelector('.button__lpc_5');
const lpc11Button = document.querySelector('.button__lpc_11');

const buttons = document.querySelector('.buttons');
const cleaningSection = document.querySelector('.cleaning');
const cleaningSectionButtons = cleaningSection.querySelectorAll('.form__button');
const clearButton = document.querySelector('.button__clear_all');



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

createQuestions(allButton, all);
createQuestions(kodeksButton, kodeks);
createQuestions(grupsButton, grups);
createQuestions(technologyButton, technology);
createQuestions(managementButton, management);
createQuestions(smkButton, smk);
createQuestions(otButton, ot);
createQuestions(tkrfButton, tkrf);
createQuestions(productionButton, production);
createQuestions(machineButton, machine);
createQuestions(electroButton, electro);
createQuestions(economicButton, economic);
createQuestions(lpc5Button, lpc_5);
createQuestions(lpc11Button, lpc_11);

clearButton.addEventListener('click', () => {
  inputs.forEach(input => {
    input.checked = false;
  });
});

