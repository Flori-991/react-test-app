import {useState} from "react";
import axios, {Axios} from "axios";
import './App.css';

const App = () => {
    const placeHolder = 'Look up meanings';
    const [wordToSearch, setWordToSearch] = useState('');
    const [apiResponse, setApiResponse] = useState(null);

    const searchOnEnter = (event) => {
        if (event.key === 'Enter'){
            getDictApiResponse(wordToSearch);
        }
    }

    const getDictApiResponse = async () => {
        try {
            setApiResponse(await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + wordToSearch));
        }
        catch (err){
        }
    }

    return (
        <div className="App">
            <input placeholder={placeHolder} onKeyDown={searchOnEnter} onChange={event => setWordToSearch(event.target.value)}/>
            <button onClick={() => getDictApiResponse(wordToSearch)}>Search</button>
            {apiResponse && (
                <>
                    <p>{apiResponse.data[0].phonetic}</p>
                    {apiResponse.data[0].meanings.map(meaning => (<p key={meaning.definitions[0].definition}>{meaning.definitions[0].definition}</p>))}
                </>
            )}
        </div>
    );
}



export default App;
