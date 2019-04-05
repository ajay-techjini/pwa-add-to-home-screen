import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    addToHomeScreenState: ''
  }

  componentDidMount = () => {
    window.document.querySelector('#show-add-to-home-screen-popup button')
      .addEventListener('click', async () => {
        window.document.getElementById('show-add-to-home-screen-popup').classList.remove('active');
        // Show the prompt
        window.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const choiceResult = await window.deferredPrompt.userChoice
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          this.setState({
            addToHomeScreenState: 'User accepted the A2HS prompt.'
          });
        } else {
          console.log('User dismissed the A2HS prompt');
          this.setState({
            addToHomeScreenState: 'User dismissed the A2HS prompt.'
          });
        }
        window.deferredPrompt = null;
      });
  }

  render() {
    return (
      <div className="App">
        <div>Sample app for display the custom popup for Add to home screen.</div>
        <div>{this.state.addToHomeScreenState}</div>
      </div>
    );
  }
}

export default App;
