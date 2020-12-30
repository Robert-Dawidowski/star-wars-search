import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './scss/main.scss';


import Navbar from './components/layout/Navbar';
import Landing from './components/home/Landing';

import store from './store';

class App extends Component{
    render() {
         return (
             <Provider store={store} className="container py-2">
                 <Navbar />
                 <Landing />
             </Provider>
         );
    }
}

export default App;
