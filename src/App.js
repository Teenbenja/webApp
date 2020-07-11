import React, {Component} from 'react'
import './assets/styles/App.less'
import MainLayout from './container/mainLayout'


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLayout />
      </div>
    );
  }
}

export default App;
