import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App(props) {
  // console.log(`state in App`);
  // console.log(props);
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
      <Routes>
        <Route path="/profile" element={<Profile store={props.store}/>}/>
        <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    )
}

export default App;
