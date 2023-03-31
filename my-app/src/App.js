import React from 'react';

function App() {
  const age = 19;

  return <div>
    {age >= 18 ? "Вы совершеннолетний" : "Вам еще нет 18 лет"}
  </div>;
}


export default App;