import "./App.css";
import { useState } from "react";

function App() {
  const data = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [inputData, setInputData] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleClick = () => {
    if (inputData) {
      const findWord = data.find((item) => item.word === inputData);
      if (findWord) {
        setMeaning(findWord.meaning);
      } else {
        setMeaning("Word not found in the dictionary.”");
      }
    } else {
      setMeaning("Word not found in the dictionary.”");
    }
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input type="text" onChange={(e) => setInputData(e.target.value)} />
      <button onClick={handleClick}>Search</button>
      <h4>Definition:</h4>
      <p>{meaning}</p>
    </div>
  );
}

export default App;
