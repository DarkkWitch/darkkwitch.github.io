import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="centered">
      <h1>Witaj na mojej stronie React</h1>
      <Link to="/magic">
        <button className="btn">Zobacz coś fajnego</button>
      </Link>
    </div>
  );
}

export default Home;
