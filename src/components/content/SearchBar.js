import React, {useEffect, useState } from 'react';
import SubmitButton from "./SubmitButton";
import NameInput from "./NameInput";

export default () => {
    const [searchKeyWord, setKeyWordSearch] = useState("");
    const [nameQuery, setNameQuery] = useState('');
    const [stats, setStats] = useState(null);

    useEffect(() => {
        ///!!!TO TRANSFORM BYTES INTO CHARACTERS... https://flaviocopes.com/stream-api/
        const decoder = new TextDecoder('utf-8');
        let jsonData;
        const getData = () => {

            fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=${nameQuery}`, {
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
                    })
            })
            .catch(err => {
                console.log(err);
            });
        }
        nameQuery.length > 0 ? getData() : console.log("Empty...")
    },[nameQuery]);


    const inputChange = e => setKeyWordSearch(e.target.value);
    const getSearch = e => {
        e.preventDefault();
        setNameQuery(searchKeyWord);
    }

    setTimeout(() => console.log(stats),5000);

    console.log(searchKeyWord);
    console.log(nameQuery);

    return <div className="container h-100">
        <NameInput search={searchKeyWord} change={inputChange}/>
        <SubmitButton submit={getSearch}/>
    </div>
}
