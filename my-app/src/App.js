import React from 'react';

function App() {
  const items = <div>
    <li>text1</li>
    <li>text2</li>
    <li>text3</li>
  </div>;

  return <ul>
    {items}
  </ul>
}


export default App;