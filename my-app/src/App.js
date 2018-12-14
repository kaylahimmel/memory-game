import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cards
  };

  countCard = id => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });
  };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <Title>cards List</Title>
        {this.state.cards.map(card => (
          <Card
            countCard={this.countCard}
            id={card.id}
            key={card.id}
            alt={card.alt}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
