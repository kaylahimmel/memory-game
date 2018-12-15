import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";
import Card from "./components/Card"
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard";

class App extends Component {
  state = {
    cards: cards,
    selectedCards: [],
    score: 0,
    highScore: 0
  };

  handleCardClick = id => {
    console.log(id)
    let clickedCards = this.state.selectedCards;
    let newScore = this.state.score;
    let newHighScore = this.state.highScore;
    let newAlert = this.state.alert;
    let newArray = this.state.cards;
    // Logic that checks the selectedCards to see if the current card selected exists in that array 
    if (clickedCards.includes(id) && newScore > newHighScore) {
      // Logic that resets the game (the user as lost)
      // Reassigns to initial empty array (the state of the array at the start of a new game)
      clickedCards = [];
      // alter the score dependent on a loss (reset to zero)
      newScore = 0;
      // alter high score
      newHighScore = newScore;
      //add alert
      newAlert = "You already chose that one--you lose."
    
    } else {
      // Win logic (user clicked unclicked card)
      // Takes the current array and appends the clicked cards id
      clickedCards.push(id)
      // Alter the score dependent on a win (add to score)
      newScore++
    }
    newArray = this.shuffle(newArray)
    // Set this.state.cards equal to the new cards array
    this.setState({ 
      selectedCards: clickedCards, 
      score: newScore, 
      highScore: newHighScore,
      alert: newAlert, 
      cards: newArray });
  };

  // Shuffling function
  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Check for high score


  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <div>
          <Scoreboard>
            <h3>Score: {this.state.score}</h3>
            <h3>High Score: {this.state.highScore}</h3>
            {this.state.alert &&
            <h1>
              {this.state.alert}
            </h1>
            }
          </Scoreboard>
        </div>
        <div>
        <div>{this.state.cards.map(card => (
          <Card
            gamePiece={() => this.handleCardClick(card.id)}
            id={card.id}
            key={card.id}
            alt={card.alt}
            image={card.image}
          />
        ))}
    </div>
    </div>
    </Wrapper>
    )
  }
};

export default App;
