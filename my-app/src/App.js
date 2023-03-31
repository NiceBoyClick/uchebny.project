import React from 'react';

function App() {
  const str1 = 'label';
  const str2 = 'block';
  const str3 = 'elem';

  return <>
  <div>
    <label id={str1} htmlFor={str2} className={str3}>text</label>
    <br/>
      <input id={str2}/>
  </div>;
  </>
}

export default App;