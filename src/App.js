import logo from './logo.svg';
import './App.css';
import playerData from './data/playerData.json'
import { useEffect, useState } from 'react';
import Header from './component/Header/Header';
import Players from './component/Players/Players';
import Team from './component/Team/Team';

function App() {
  const [player, setPlayer] = useState([]);
  const [buyPlayer, setBuyPlayer] = useState([])
  useEffect(() => {
    setPlayer(playerData);
    console.log(playerData)
  }, [])
  const handlerAddPlayer = (player) => {
    const newByePlayer = [...buyPlayer, player];
    setBuyPlayer(newByePlayer)
  }
  return (
    <div >
      <header>
        <Header></Header>
      </header>
      <main className="player-container">
        <div className="player-div">
          {player.map(player => <Players handlerAddPlayer={handlerAddPlayer} player={player} key={player.id}></Players>)}
        </div>
        <div className="player-cart-buy">
          <Team buyPlayer={buyPlayer}></Team>
        </div>
      </main>
    </div>
  );
}

export default App;
