import React, { useState } from 'react';
import './App.css';

function App() {
  const [adjective1, setAdjective1] = useState('');
  const [noun1, setNoun1] = useState('');
  const [verb1, setVerb1] = useState('');
  const [adverb1, setAdverb1] = useState('');
  const [adjective2, setAdjective2] = useState('');
  const [noun2, setNoun2] = useState('');
  const [story, setStory] = useState('');

  const generateStory = () => {
    const newStory = `Today, I went to the zoo. I saw a(n) ${adjective1} ${noun1} jumping up and down in its tree. It ${verb1} ${adverb1} through the large tunnel that led to its ${adjective2} ${noun2}.`;
    setStory(newStory);
  };

  return (
    <div className="container">
      <h1>Madlibs Game</h1>
      <div className="input-group">
        <label htmlFor="adjective1">Adjective:</label>
        <input
          type="text"
          id="adjective1"
          value={adjective1}
          onChange={(e) => setAdjective1(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="noun1">Noun:</label>
        <input
          type="text"
          id="noun1"
          value={noun1}
          onChange={(e) => setNoun1(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="verb1">Verb (past tense):</label>
        <input
          type="text"
          id="verb1"
          value={verb1}
          onChange={(e) => setVerb1(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="adverb1">Adverb:</label>
        <input
          type="text"
          id="adverb1"
          value={adverb1}
          onChange={(e) => setAdverb1(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="adjective2">Adjective:</label>
        <input
          type="text"
          id="adjective2"
          value={adjective2}
          onChange={(e) => setAdjective2(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="noun2">Noun:</label>
        <input
          type="text"
          id="noun2"
          value={noun2}
          onChange={(e) => setNoun2(e.target.value)}
        />
      </div>
      <button onClick={generateStory}>Generate Story</button>
      {story && <div className="story">{story}</div>}
    </div>
  );
}

export default App;
