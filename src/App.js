import React from "react"
import axios from "axios"
import './App.css';
import GetQuote from './components/GetQuote';


function App() {
  
  const [quoteCard, setQuoteCard]= React.useState({
    "quote": "That's where I saw the leprechaun...He told me to burn things.",
    "character": "Ralph Wiggum",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    "characterDirection": "Left"
    });

  const handleChange = () =>{
    console.log("btn was clicked")
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then((response) => response.data)
    // Use this data to update the state
    .then((data) => {
        console.log(data[0])
        setQuoteCard(data[0]);
    });
  }

  return (
    <div className="App">
    <main>
      <GetQuote quoteCard={quoteCard}/>
      <button onClick={handleChange}>Change the quote</button>
    </main>
    </div>
  );
}

export default App;
