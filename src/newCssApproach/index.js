import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'cap-ui/src/sass/index.scss';

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