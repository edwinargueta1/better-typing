export default function StatsBar({ prevError, error, prevAccuracy, accuracy, phraseRunTime }) {
  return (
    <div id="statBarAreaWrapper">
      <div id="statBar">
        <p>Previous Lesson:</p>
        <p>Accuracy: {prevAccuracy}%</p>
        <p>Errors: {prevError} </p>
        <p>Errors: {error}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>Time: {phraseRunTime}</p>
      </div>
    </div>
  );
}