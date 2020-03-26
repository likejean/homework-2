import React from 'react';
import './App.css';
import Header from './components/header';
import Main from "./components/content";
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

    const HeaderMenuItems = [
        {category: 'Home', customColor: null },
        {category: 'Population', customColor: null },
        {category: 'Economies', customColor: null },
        {category: 'Coronavirus', customColor: 'red' }
    ];
    const FooterMenuItems = [

    ];
    return (
        <div className="App">
            <Header items={HeaderMenuItems}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
