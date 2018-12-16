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
    highScore: 0,
    alert: "",
    instructions: "The object of the game is to click on each card without clicking on the same card twice. See if you can collect all 16 cards!"
  };

  countCard = id => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id);
    console.log(cards)
    }

  handleCardClick = id => {
    console.log(id)
    let clickedCards = this.state.selectedCards;
    let newScore = this.state.score;
    let newHighScore = this.state.highScore;
    let newAlert = this.state.alert;
    let newArray = this.state.cards;
    // Logic that checks the selectedCards to see if the current card selected exists in that array 
    if (clickedCards.includes(id) && newScore > newHighScore) {
      // Logic that resets the game (the user has lost)
      // Reassigns to initial empty array (the state of the array at the start of a new game)
      clickedCards = [];
      // alter the score dependent on a loss (reset to zero)
      newScore = 0;
      // show alert
      newAlert = "You already chose that one--you lose."; 
    } else {
      // Win logic (user clicked unclicked card)
      // Takes the current array and appends the clicked cards id
      clickedCards.push(id)
      // Alter the score dependent on a win (add to score)
      newScore++
      // alter high score
      newHighScore = newScore;
    };

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
  };

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <Wrapper>
        <div>
          <Scoreboard>
            <h6>Instructions: {this.state.instructions}</h6>
            <h3>Current Score: {this.state.score}</h3>
            <h4>High Score: {this.state.highScore}</h4>
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
  };
};

export default App;
