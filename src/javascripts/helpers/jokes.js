import getJoke from './getJoke';

let joke = {};

const jokeResponse = () => {
  getJoke().then((response) => {
    joke = response;
  });
};

const giveSetup = () => joke.setup;

const givePunchline = () => joke.punchline;

export { jokeResponse, givePunchline, giveSetup };
