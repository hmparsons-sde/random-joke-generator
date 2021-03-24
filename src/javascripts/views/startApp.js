import { jokeContainer } from '../components/jokePage';
import domEvents from '../events/domEvents';
import getJoke from '../helpers/getJoke';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  domEvents();
  getJoke();
  jokeContainer();
};

export default startApp;
