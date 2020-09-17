import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className='App'> 
        <span style={{display: 'flex', justifyContent: 'flex-end', background: '#000'}} className="top-header f4 pa2 b gold">
          <button href="#" className="pointer">0-000-000</button>
        </span>
        <Navigation />

      </div>
    );
  }
}

export default App;