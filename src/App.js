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
        {name: 'Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/coronavirus/2019-nCoV/index.html'},
        {name: 'Worldometer', url: 'https://www.worldometers.info/coronavirus/'},
        {name: 'WHO', url: 'https://www.who.int/emergencies/diseases/novel-coronavirus-2019'}
    ];
    return (
        <div className="App">
            <Header items={HeaderMenuItems}/>
            <Main/>
            <Footer items={FooterMenuItems}/>
        </div>
    );
}

export default App;
