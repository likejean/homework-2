import React, {useEffect, useState} from 'react';
import LoaderSpinner from "./LoaderSpinner";
import Content from "./Content";
import SearchBar from "./SearchBar";
import PlotChart from "./PlotChart";


export default () => {
    const [totalStats, setTotalStats] = useState(null);
    const [countryStats, setCountryStats] = useState(null);
    useEffect(() => {
        ///!!!TO TRANSFORM BYTES INTO CHARACTERS... https://flaviocopes.com/stream-api/
        const decoder = new TextDecoder('utf-8');
        let jsonData;
        fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "a44cc5419amsh8091029d3dfe288p1e59c3jsna3190f081f0e"
            }
        })
        .then(response => {
            response.body
                .getReader()
                .read()
                .then(({value, done}) => {
                    jsonData = JSON.parse(decoder.decode(value));
                    setTotalStats(jsonData);
                })
            })
        .catch(err => {
            console.log(err);
        });
    },[]);

    const Plot = data => <React.Fragment>
        <p className="alert alert-primary">{data.country}</p>
        <PlotChart data={data}/>
    </React.Fragment>
    console.log("countryStats",countryStats)
    return (
        <React.Fragment>
            <div className='main-container'>
                {totalStats === null ? <LoaderSpinner type={"BallTriangle"}/> : <Content data={totalStats}/>}
                <SearchBar setCountryStats={setCountryStats}/>
            </div>
            <h1>{countryStats === null || countryStats.error ? <p className="alert alert-primary">Search Country by Name</p> : Plot(countryStats)}</h1>
        </React.Fragment>
    )
}