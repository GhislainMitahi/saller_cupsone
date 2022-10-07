import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { fetchCategory } from './redux/category/categorySlice';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
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
    </div>
  );
}

export default App;
