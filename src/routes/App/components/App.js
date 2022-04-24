import { useDarkMode } from '../../../common/contexts/DarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';

function App() {
  const { state: { darkMode }, setDarkMode } = useDarkMode();

  return (
    <div className="app">
      <div className="level">
        <div>
          <h1 className="title">Dark Mode</h1>
        </div>

        {/* --The button that should toggle dark mode-- */}
        <button
          className="app__dark-mode-btn icon level-right"
          onClick={() => { setDarkMode({ darkMode: !darkMode }); }}
        >
          {
            darkMode
              ? (
                <FontAwesomeIcon
                  className="animate__animated animate__bounceIn faster"
                  icon={faSun}
                  color="#FFA500"
                />
              )
              : null
          }
          {
            !darkMode
              ? <FontAwesomeIcon className="animate__animated animate__bounceIn faster" icon={faMoon} />
              : null
          }
        </button>

      </div>


      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Name" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Email" />
        </div>
      </div>

      <section className="section">
        <div className="buttons level-right">
          <a className="button is-primary">Save</a>
          <a className="button is-link">Submit</a>
        </div>
      </section>
    </div>
  );
}

export default App;
