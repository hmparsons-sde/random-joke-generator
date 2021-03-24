import { jokeContainer, showJoke, showPunchline } from '../components/jokePage';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('jokeGenerator')) {
      showJoke();
    }
    if (e.target.id.includes('getPunchLine')) {
      showPunchline();
    }
    if (e.target.id.includes('getNewJoke')) {
      jokeContainer();
    }
  });
};

export default domEvents;
