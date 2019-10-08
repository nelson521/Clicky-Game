import React, { Component } from 'react';

class NavMessage extends Component{
  state = {
    message: '',
    animated: false
  }

  componentDidUpdate({ score, topScore }, previousState) {
    const newState = {
      animated: true
    }
    if (score === 0 && topScore === 0) {
      newState.message = '';
    } else if (score === 0 && topScore > 0) {
      newState.message = 'Incorrect';
    } else{
      newState.message = 'Correct!'
    }
    if(score !== this.props.score || this.state.message !== newState.message) {
      this.setState(newState)
    }
  }

  renderMessage = () => {
    switch (this.state.message){
      case 'Correct':
        return 'You guessed correctly!'
      case 'Incorrect':
        return 'Wrong'
      default:
        return 'Click a image.'
    }
  }
}
