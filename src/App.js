import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLorem } from './features/counter/loremSlice';

function App() {
  const dispatch = useDispatch();
  const lorem = useSelector((state) => state.lorem);
  useEffect(() => {
    dispatch(getLorem());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {lorem.data}
        </p>
      </header>
    </div>
  );
}

export default App;
