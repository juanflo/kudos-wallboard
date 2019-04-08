import React from 'react';
import KudosCard from 'KudosCard';
import collection from 'lodash/collection';

class App extends React.Component {
  state = {
    kudos: null,
    currentKudo: null
  };

  constructor(props) {
    super(props);
    this.TRANSITION_TIMER = (process.env.REACT_APP_TRANSISTION_TIMER || 5) * 1000;
    this.API_HOST = (process.env.NODE_ENV === 'production') ? process.env.REACT_APP_API_HOST : '';
    this.AUTHORIZATIONTOKEN = process.env.REACT_APP_AUTHORIZATION_TOKEN || '';
  }


  async updateDisplay() {
    let { kudos } = this.state;

    if (!(kudos && kudos.length > 0)) {
      kudos = collection.shuffle(await App.getKudos(this.API_HOST, {
        Authorization: this.AUTHORIZATIONTOKEN
      }));
    }
    const currentKudo = kudos.pop();
    this.setState({
      kudos,
      currentKudo
    });
    setTimeout(() => this.updateDisplay(), this.TRANSITION_TIMER);
  }

  async componentDidMount() {
    let kudos = collection.shuffle(await App.getKudos(this.API_HOST, {
      Authorization: this.AUTHORIZATIONTOKEN
    }));
    const currentKudo = kudos.pop();
    this.setState({
      kudos,
      currentKudo
    });

    setTimeout(() => this.updateDisplay(), this.TRANSITION_TIMER);
  }

  static getKudos = async (host, headers) => {
    const response = await fetch(`${host}/messages`, {
      headers
    });
    const kudos = await response.json();
    return kudos;
  };

  render() {
    const { currentKudo } = this.state;
    let randomImageIndex = 0;
    if (currentKudo) {
      randomImageIndex = Math.floor(Math.random() * currentKudo.recipients.length);
    }
    return currentKudo ? (
      <KudosCard
        src={currentKudo.recipients[randomImageIndex].image}
        author={currentKudo.author.name}
        recipients={currentKudo.recipients}
        message={currentKudo.text}
        reactions={currentKudo.reactions}
      />
    ) : null;
  }
}

export default App;
