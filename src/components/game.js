import React from 'react';
//import {connect} from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

//document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';


export default function Game (props){

  // constructor(props) {
  //   super(props);
  // }

  // render() {
  //   const { feedback, guesses, auralStatus } = this.state;
  //   const guessCount = guesses.length;

    return (
      <div>
        <Header
          // onRestartGame={() => this.restartGame()}
          // onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            // feedback={feedback}
            // guessCount={guessCount}
            // onMakeGuess={guess => this.makeGuess(guess)}
          />
          {/* <StatusSection 
          // guesses={guesses} 
          //   auralStatus={auralStatus}
          /> */}
        {/* <InfoSection /> */}
        </main>
      </div>
    );
}

