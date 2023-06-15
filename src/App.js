import {useState} from "react";
import axios, {Axios} from "axios";
import './App.css';

const App = () => {
    const placeHolder = 'Search for word';
    const [wordToSearch, setWordToSearch] = useState('');
    const [dictEntry, setDictEntry] = useState('');
    const [apiResponse, setApiResponse] = useState(null);

    const getDictEntry = async () => {
        //setApiResponse(await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordToSearch));

        axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordToSearch)
            .catch(function (error) {setApiResponse(null)})
            .then(res => setApiResponse(res));

        console.log(apiResponse);

        if (apiResponse !== null && apiResponse !== undefined ){
            setDictEntry(apiResponse.data[0].phonetic);
        }
        else {
            setDictEntry('This is not in our database, sorry!')
        }
    }

    return (
        <div className="App">
            <input placeholder={placeHolder} id="wordToSearch" onChange={event => setWordToSearch(event.target.value)}/>
            <button onClick={getDictEntry}>Search</button>
            <h1>{dictEntry}</h1>
        </div>
    );
}

export default App;
