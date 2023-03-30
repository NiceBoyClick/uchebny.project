import React from 'react';

function App() {
  const li1 = <li>text1</li>;
  const li2 = <li>text2</li>;
  const li3 = <li>text3</li>;

  return <div>
    <ul>
      {li1}
      {li2}
      {li3}
    </ul>
  </div>
}


export default App;