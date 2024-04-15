import React, { useState, useEffect } from "react";
import TextBox from "./TextBox";
import StatsBar from "./StatsBar";

export default function TypeGame({dictionary}) {

  const [keyboard, setKeyboard] = useState([]);
  const [phraseRunTime, setPhraseRunTime] = useState(0);
  const [error, setError] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const [prevError, setPrevError] = useState(0);
  const[prevAccuracy, setPrevAccuracy] = useState(0);


  //Will recalculate with every key stroke
  useEffect(() => {
    calculateAccuracy(error, keyboard.length, setAccuracy);
  }, [keyboard]);

  function calculateAccuracy(error, totalChars, setAccuracy) {
    let newAccuracy = Number.isNaN((totalChars - error) / totalChars)
      ? 0
      : (((totalChars - error) / totalChars) * 100).toFixed(2);
    let formated =
      newAccuracy % 1 === 0 ? Math.floor(newAccuracy) : newAccuracy;
    setAccuracy(formated);
  }
  return (
    <>
    <StatsBar prevError={prevError} error={error} prevAccuracy={prevAccuracy} accuracy={accuracy} />
      <div id="textBox">
        <TextBox
          dictionary={dictionary}
          phraseRunTime={phraseRunTime}
          error={error}
          setError={setError}
          accuracy={accuracy}
          keyboard={keyboard}
          setKeyboard={setKeyboard}
          setPrevError={setPrevError}
          setPrevAccuracy={setPrevAccuracy}
        />
      </div>
    </>
  );
}
