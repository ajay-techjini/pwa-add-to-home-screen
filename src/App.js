import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  deferredPrompt;
  state = {
    enablePopup: false
  }
  componentDidMount() {

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      this.setState({enablePopup: true});
    });
  }

  showAddToHomeScreenPopup = () => {
    this.setState({
      enablePopup: false
    }, async () => {
      // Show the prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      const choiceResult = await this.deferredPrompt.userChoice
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      this.deferredPrompt = null;
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {this.state.enablePopup && (
          <div>
            <div>Enable add to home screen popup</div>
            <button onClick={this.showAddToHomeScreenPopup}>Enable</button>
          </div>
        )
        }
      </div>
    );
  }
}

export default App;
