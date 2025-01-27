import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import './App.css';

const App = () => {
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const goBackToCollection = () => {
    setSelectedBot(null);
  };

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onEnlist={enlistBot} onGoBack={goBackToCollection} />
      ) : (
        <>
          <BotCollection onEnlist={enlistBot} setSelectedBot={setSelectedBot} />
          <YourBotArmy army={army} onRelease={releaseBot} />
        </>
      )}
    </div>
  );
};

export default App;
