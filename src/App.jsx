import React from 'react';
import KudosCard from 'KudosCard';

class App extends React.Component {
  state = {
    kudos: null,
    currentKudo: null
  };

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
    setTimeout(() => this.updateDisplay(), 5000);
  }

  async componentDidMount() {
    const kudos = await App.getKudos();
    const currentKudo = kudos.pop();
    this.setState({
      kudos,
      currentKudo
    });

    setTimeout(() => this.updateDisplay(), 5000);
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
