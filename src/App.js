import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <>
        <Router>
          <Routes>
            <Route path="/" element="Home!" />
            <Route path="/greeting" element={<Greeting />} />
          </Routes>
        </Router>
      </>
    </Provider>
  );
}

export default App;
