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
    this.API_HOST = (process.env.NODE_ENV === 'production') ? 'http://kudo-judo.herokuapp.com' : '';
  }


  async updateDisplay() {
    let { kudos } = this.state;

    if (!(kudos && kudos.length > 0)) {
      kudos = await App.getKudos(this.API_HOST);
    }
    const currentKudo = kudos.pop();
    this.setState({
      kudos,
      currentKudo
    });
    setTimeout(() => this.updateDisplay(), this.TRANSITION_TIMER);
  }

  async componentDidMount() {
    const kudos = await App.getKudos(this.API_HOST);
    const currentKudo = kudos.pop();
    this.setState({
      kudos,
      currentKudo
    });

    setTimeout(() => this.updateDisplay(), this.TRANSITION_TIMER);
  }

  static getKudos = async (host) => {
    const response = await fetch(`${host}/messages`);
    const kudos = await response.json();
    return kudos;
  };

  render() {
    const { currentKudo } = this.state;

    return currentKudo ? (
      <KudosCard
        src={currentKudo.recipients[0].image}
        author={currentKudo.author.name}
        recipient={currentKudo.recipients[0].name}
        message={currentKudo.text}
      />
    ) : null;
  }
}

export default App;
