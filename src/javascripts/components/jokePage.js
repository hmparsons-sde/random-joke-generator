import joke from '../../assets/joke.png';
import { givePunchline, giveSetup } from '../helpers/jokes';

const jokeContainer = () => {
  document.querySelector('#joke-container').innerHTML = `
  <div class="container" id="jokeContainer">
    <div class="title">
      <img src="${joke}" class="img-fluid" alt="Responsive image">
    </div>
    <div class="jokeDisplay"></div>
    <div class="punchLine"></div>
    <button type="button" class="btn btn-dark jokeButton" id="jokeGenerator">GET A JOKE</button>
  </div>`;
};

const showJoke = () => {
  document.querySelector('#joke-container').innerHTML = `
  <div class="container" id="jokeContainer">
    <div class="title">
      <img src="${joke}" class="img-fluid" alt="Responsive image">
    </div>
    <div class="jokeDisplay">${giveSetup()}</div>
    <button type="button" class="btn btn-dark jokeButton" id="getPunchLine">GET PUNCHLINE</button>
  </div>`;
};

const showPunchline = () => {
  document.querySelector('#joke-container').innerHTML = `
  <div class="container" id="jokeContainer">
    <div class="title">
      <img src="${joke}" class="img-fluid" alt="Responsive image">
    </div>
    <div class="punchLine">${givePunchline()}</div>
    <button type="button" class="btn btn-dark jokeButton" id="getNewJoke">GET A NEW JOKE</button>
  </div>`;
};

export { showJoke, jokeContainer, showPunchline };
