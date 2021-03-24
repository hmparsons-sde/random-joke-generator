import printLogo from '../components/jokeLogo';

const domBuilder = () => {
  const domString = `<div class="joke-container mx-auto" id="joke-container">
                        <div class="logo-container" id="logo-container">${printLogo()}</div>
                        <div class="setup-container joke-text" id="setup-container"></div>
                        <div class="punchline-container joke-text" id="punchline-container"></div>
                        <div class="btn-container joke-btn-container" id="joke-btn-container"></div>
                     </div>
                    `;
  document.querySelector('#app').innerHTML = domString;
};

export default domBuilder;
