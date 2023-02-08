import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [players, setPLayers] = useState([
    {
      name: 'Ubiratã',
      ID: 'bira98',
      platform: 'Computer'
    }
  ])

  const handleNewPlayer = (player: any) => {
    // create a new array with all the previous players and add the new one at the end
    console.log(player)
    setPLayers([...players, player]);
  };

  return (
    <div className='App'>
      <Banner />
      <Form registeredPlayers={(player: any) => handleNewPlayer(player)} />
    </div>
  );
}

export default App;
