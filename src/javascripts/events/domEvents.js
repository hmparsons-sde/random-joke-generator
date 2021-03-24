import { jokeContainer, showJoke, showPunchline } from '../components/jokePage';
import getJoke from '../helpers/getJoke';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('jokeGenerator')) {
      getJoke().then((jokeObject) => showJoke(jokeObject));
    }
    if (e.target.id.includes('getPunchLine')) {
      getJoke().then((jokeObject) => showPunchline(jokeObject));
    }
    if (e.target.id.includes('getNewJoke')) {
      jokeContainer();
    }
  });
};

export default domEvents;
