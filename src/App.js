import React from 'react';
import { Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/login';
import Preloader from './common/Preloader';

function App() {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div className='app-wrapper-content'>
      <Suspense fallback={<Preloader/>}>
      <Routes>
        
        <Route path='/profile/:userId' element={<ProfileContainer  />} />
        <Route path='/profile' element={<ProfileContainer />} />
        <Route path="/dialogs/*" element={<DialogsContainer />}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/users" element={<UsersContainer/>}/>
        <Route path="/login" element={<Login/>}/>
        
      </Routes>
      </Suspense>
      </div>
    </div>
    </BrowserRouter>
    )
}

export default App;
