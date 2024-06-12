import React from "react";

export default function DataTable({ phraseHistoryData }) {

  return (
    <div className="dataTableWrapper">
      <table>
        <thead>
          <tr>
            <td colSpan={5} className="tableTile">Recent Lessons</td>
          </tr>
          <tr className="titleTableData" key={-1}>
            <td>Completed</td>
            <td>WPM</td>
            <td>Accuracy</td>
            <td>Errors</td>
            <td>Run Time</td>
          </tr>

        </thead>
        <tbody>
          {phraseHistoryData.map((lesson, index) => {
            return (
              <tr key={index}>
                <td key={"date"}>{new Date(lesson.timeCompleted).toLocaleString()}</td>
                <td key={"WPM"}>{lesson.WPM}</td>
                <td key={"acc"}>{lesson.accuracy}%</td>
                <td key={"errors"}>{lesson.errors}</td>
                <td key={"timeCompleted"}>{lesson.phraseRunTime}s</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}