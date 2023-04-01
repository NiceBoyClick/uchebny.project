import React from 'react';

function App() {
  function func(event) {
    console.log(event); // объект с событием
  }

  return <div>
    <button onClick={func}>act</button>
  </div>;
}


export default App;