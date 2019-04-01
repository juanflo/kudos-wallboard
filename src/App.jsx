import React from 'react';
import KudosCard from 'KudosCard';

class App extends React.Component {
  state = {
    kudos: null,
    currentKudo: null
  };

  constructor(props) {
    super(props);

    this.TRANSITION_TIMER = (process.env.REACT_APP_TRANSISTION_TIMER || 5) * 1000;
  }


  async updateDisplay() {
    let { kudos } = this.state;

    if (!(kudos && kudos.length > 0)) {
      kudos = await App.getKudos();
    }
    const currentKudo = kudos.pop();
    this.setState({
      kudos,
      currentKudo
    });
    setTimeout(() => this.updateDisplay(), this.TRANSITION_TIMER);
  }

  async componentDidMount() {
    const kudos = await App.getKudos();
    const currentKudo = kudos.pop();
    this.setState({
      kudos,
      currentKudo
    });

    setTimeout(() => this.updateDisplay(), this.TRANSITION_TIMER);
  }

  static getKudos = async () => {
    const response = await fetch('/messages');
    const kudos = await response.json();
    return kudos;
  };

  render() {
    const { currentKudo } = this.state;

    return currentKudo ? (
      <KudosCard
        src={currentKudo.recipient.image}
        author={currentKudo.author.name}
        recipient={currentKudo.recipient.name}
        message={currentKudo.text}
      />
    ) : null;
  }
}

export default App;
