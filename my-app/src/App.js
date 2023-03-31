import React from 'react';

function App() {
  const isAdult = true;
  let text;

  if (isAdult) {
    text = <p>okay</p>
  } else {
    text = <p>not okay</p>
  }
  return <div>
    {text}
  </div>;

}

export default App;