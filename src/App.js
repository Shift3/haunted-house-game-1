<<<<<<< HEAD
import React, {useState} from 'react';
import { 
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import logo from './logo.png';
import './App.css';
import RoomData from './components/RoomData.json';
import EventsData from './components/EventsData.json';
import StartGame from './components/StartGame';
import GameOver from './components/GameOver';
import FindKey from './components/FindKey';
=======
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import RoomData from "./components/RoomData.js";
import EventsData from "./components/EventsData";
import StartGame from "./components/StartGame";
import Hallway from "./components/Hallway";
import Room from "./components/Room";
>>>>>>> origin/staging

function App() {
  const [hasGoldKey, setHasGoldKey] = useState(false);
  const [hasSilverKey, setHasSilverKey] = useState(false);
  const [rooms, setRooms] = useState(RoomData);
  const [events, setEvents] = useState(EventsData);
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartGame />
        </Route>
        <Route exact path="/hallway">
          <Hallway rooms={rooms} />
        </Route>
        <Route path="/room/:name">
          <Room rooms={rooms} events={events} />
        </Route>
<<<<<<< HEAD

        <FindKey hasSilverKey = {hasSilverKey} hasGoldKey = {hasGoldKey}/>

=======
>>>>>>> origin/staging
      </Switch>
    </BrowserRouter>
  );
}
export default App;
