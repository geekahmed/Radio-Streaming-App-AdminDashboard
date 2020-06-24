import React from 'react';

import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {Dashboard} from './components/dashboard/Dashboard';
import NavbarHeader from '../src/components/layout/Navbar';
import AddCategory from '../src/components/categories/AddCategory';
import Footer from '../src/components/layout/Footer';
import AddChannels from './components/channels/AddChannels';
import PushNotification from './components/pushNotifications/PushNotifications';
import AdminSettings from './components/settings/Admin';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarHeader />
      <Switch>
            <Route exact path = '/' component = {Dashboard}></Route> 
            <Route exact path = '/addcategory' component = {AddCategory}></Route>  
            <Route exact path = '/addchannel' component = {AddChannels}></Route>
            <Route exact path = '/pushnotification' component = {PushNotification}></Route>
            <Route exact path = '/settings' component = {AdminSettings}></Route>
      </Switch>
      <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
