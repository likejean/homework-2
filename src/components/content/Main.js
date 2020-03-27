import React, {useEffect, useState} from 'react';
import LoaderSpinner from "./LoaderSpinner";
import Content from "./Content";
import SearchBar from "./SearchBar";

export default () => {
    const [stats, setStats] = useState(null);
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
                    setStats(jsonData);
                    console.log('TOTALS', stats)
                })
            })
        .catch(err => {
            console.log(err);
        });
    },[]);

    return (
        <div className='main-container'>
            {stats === null ? <LoaderSpinner/> : <Content data={stats}/>}
            <SearchBar/>
        </div>
    )
}