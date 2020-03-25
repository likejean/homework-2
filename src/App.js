import React from 'react';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

    const HeaderMenuItems = [
        'Home',
        'Sales',
        'Favorites',
        'About'
    ];
    const FooterMenuItems = [

    ];
    return (
        <div className="App">
            <Header items={HeaderMenuItems}/>
        </div>
    );
}

export default App;
