// src/App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MagicPage from './pages/MagicPage'; //tu definiuje sciezke kierujaca
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/magic" element={<MagicPage />} /> /
      </Routes>
    </Router>
  ); //tu -/path=magic -uzywam zdefiniowanej sciezki na gorze
}

function App() {
  return (
    

    <div>
      <header>
        <h1>Hello World!</h1>
        <h2>Jagoda</h2>
      </header>

      <main>
        <aside>
          <ol>
            <li><a href="baltyk.html">Baltyk</a></li>
            <li><a href="atlantyk.html">Atlantyk</a></li>
            <li><a href="pacyfik.html">Pacyfik</a></li>
          </ol>
        </aside>

        <div id="notka">
          Widoczne nazwy po lewo to tak naprawde potoczne nazwy tych akwenów
        </div>

        <div id="blok1">
          <h1>Baltyk tak o</h1>
          <h4>
            Wciąż rosnące wyspy<br />
            W niektórych rejonach, np. w Szwecji i Finlandii, w wyniku podnoszenia się lądu po 
            zlodowaceniu pojawiają się nowe wyspy lub łączą się istniejące ziemia 
            „wypiętrza się” nawet o 8 mm rocznie!
          </h4>

          <h4>
            Morze prawie słodkowodne<br />
            Bałtyk ma bardzo niskie zasolenie w niektórych miejscach woda jest prawie
            słodka! W Zatoce Botnickiej zasolenie wynosi zaledwie 0,3%,
            a w Bałtyku Środkowym ok. 0,7% (dla porównania: w Oceanie Atlantyckim ponad 3%).
          </h4>
        </div>

        <div className="centered">
          <h1>Witaj na mojej stronie React</h1>
          <Link to="/magic">
            <button className="btn">Zobacz coś fajnego</button>
          </Link>
        </div>
      </main>

      <footer>
        taka o stronka c:
      </footer>
    </div>
  );
}

export default App;
