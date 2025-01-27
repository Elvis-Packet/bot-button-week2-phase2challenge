import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import './App.css';

const App = () => {
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  // Enlist bot to the army
  const enlistBot = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
    setSelectedBot(null); // Automatically return to collection after enlistment
  };

  // Release bot from army
  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id)); // Remove bot from the army
  };

  // Go back to bot collection from specs
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
          <BotCollection setSelectedBot={setSelectedBot} />
          <YourBotArmy army={army} onRelease={releaseBot} /> {/* Pass releaseBot function here */}
        </>
      )}
    </div>
  );
};

export default App;