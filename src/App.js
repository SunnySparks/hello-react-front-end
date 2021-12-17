import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from "./components/Greeting";
import store from './redux/configureStore';
import { Provider } from "react-redux";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Router>
          <Routes>
            <Route path="/" element= { ("Home!") }/>
            <Route path="/greeting" element={ <Greeting/> } />
          </Routes>
        </Router>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App