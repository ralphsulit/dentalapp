import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className='App'> 
        <span style={{display: 'flex', justifyContent: 'flex-end', background: '#dcdcdc'}} className="top-header f4 pa2">
          <button href="#" className="top-header pointer gold">0-000-000</button>
        </span>
        <Navigation />

      </div>
    );
  }
}

export default App;