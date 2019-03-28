import React, { useState, useEffect } from 'react';
import KudosCard from 'KudosCard';

const getMessages = async (kudos, setKudos) => {
  if (kudos.length === 0) {
    const response = await fetch('/messages');
    const messages = await response.json();

    setKudos(messages);
  }
};

const App = () => {
  const [kudos, setKudos] = useState([]);
  const kudo = kudos[0];

  useEffect(() => {
    getMessages(kudos, setKudos);
  }, [kudos]);

  return kudo ? (
    <KudosCard
      src={kudo.recipient.image}
      author={kudo.author.name}
      recipient={kudo.recipient.name}
      message={kudo.text}
    />
  ) : null;
};

export default App;
