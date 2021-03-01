import logo from './logo.svg';
import './App.css';
import playerData from './data/playerData.json'
import { useEffect, useState } from 'react';
import Header from './component/Header/Header';
import Players from './component/Players/Players';

function App() {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer(playerData);
    console.log(playerData)
  }, [])

  return (
    <div >
      <header>
        <Header></Header>
      </header>
      <main className="player-container">
        <div className="player-div">
          {player.map(player => <Players player={player} key={player.id}></Players>)}
        </div>
        <div className="player-cart-buy">
          <h1>Buy player</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
