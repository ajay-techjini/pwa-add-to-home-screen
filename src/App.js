import React, { Component } from 'react';
import './App.css';

class App extends Component {

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
          document.querySelector('.App').innerHTML = 'User accepted the A2HS prompt';
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        window.deferredPrompt = null;
      });
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
