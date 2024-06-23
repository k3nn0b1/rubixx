import React from 'react';
import './styles/App.css'
import { NavBar } from './components/NavBar';
import { ActivityList} from "./components/ActivityList/ActivityList";
import {data} from "./data";

function App() {
  return (
    <>
      <NavBar />
      <ActivityList items={data} />
    </>
  );
}

export default App;
