import React, {Component} from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

class App extends Component {
  render() {
    return <h1>Hello World! sdf asdf</h1>;
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);