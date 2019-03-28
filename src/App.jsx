import React from 'react';
import KudosCard from 'KudosCard';

const App = () => (
  <KudosCard
    src="https://avatars.slack-edge.com/2019-03-28/593216061622_b2e2e2572d29e3eeb66b_192.png"
    author="Juan"
    recipient="Matt Wong"
    message={
      <>
        Alan Rails, ladies and gentlemen. After his parents' tragic death in a
        railroad accident, he gained the power to summon ghost trains. It's not
        all bad though, they were spared having to see their grown son wear a
        whistle. Yeah, sure, I mean, if you spend all day shuffling words
        around, you can make anything sound bad. This isn't Game of Thrones,
        Morty. Aww, gee, you got me there, Rick.
      </>
    }
  />
);

export default App;
