import React, { useState, useEffect } from "react";
import TextBox from "./TextBox";
import StatsBar from "./StatsBar";

export default function TypeGame({dictionary}) {

  const [phrase, setPhrase] = useState([]);
  const [phraseRunTime, setPhraseRunTime] = useState(0);
  const [error, setError] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [wordsPerMin, setWordsPerMin] = useState(0);

  //Will recalculate with every key stroke
  useEffect(() => {
    calculateAccuracy(error, phrase.length, setAccuracy);
  }, [phrase]);

  function calculateAccuracy(error, totalChars, setAccuracy) {
    let newAccuracy = Number.isNaN((totalChars - error) / totalChars)
      ? 0
      : (((totalChars - error) / totalChars) * 100).toFixed(2);
    let formated =
      newAccuracy % 1 === 0 ? Math.floor(newAccuracy) : newAccuracy;
    setAccuracy(formated);
  }
  return (
    <div id="gameWrapper">
      <StatsBar
        error={error}
        accuracy={accuracy}
        phraseRunTime={phraseRunTime}
        wordsPerMin={wordsPerMin}
      />
      <TextBox
        dictionary={dictionary}
        phrase={phrase}
        setPhrase={setPhrase}
        setPhraseRunTime={setPhraseRunTime}
        error={error}
        setError={setError}
        accuracy={accuracy}
        setWordsPerMin={setWordsPerMin}
      />
    </div>
  );
}
