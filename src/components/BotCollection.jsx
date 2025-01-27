import React, { useState, useEffect } from 'react';

const BotCollection = ({ onEnlist, setSelectedBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('https://bots-si0g.onrender.com/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <div
          key={bot.id}
          className="bot-card"
          onClick={() => setSelectedBot(bot)} // Set selected bot to show details
        >
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} alt={bot.name} />
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
