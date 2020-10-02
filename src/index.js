import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import createStore from "./Store/store";
import App from './App';
class Test extends React.Component {
  render() {
    const store = createStore({})
    return (
      <Provider store={store}>
      <div className="container-fluid">
       <App/>
      </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));