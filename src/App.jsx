import './App.css';
import { useState, React, createContext} from 'react';
import Context from './components/Context';
import EventForm from './components/EventForm';
import { Route,Routes} from 'react-router-dom';
import EventDetails from './components/EventDetails'

export const StorageContext = createContext();

function App() {
  const values = Context()


  return (
    <div className="App">
      <StorageContext.Provider value={values}>
        <header className="App-header">
          <p id='header'> Online Event Scheduler </p>
        <Routes>
          <Route path='/' element={<EventForm/>}></Route>
          <Route path='/details/:index' element={<EventDetails/>}></Route>
        </Routes>
        </header>
      </StorageContext.Provider>

    </div>
  );
}

export default App;
