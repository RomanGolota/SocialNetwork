import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/dialogs/*" element={<DialogsContainer />}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/users" element={<UsersContainer/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    )
}

export default App;
