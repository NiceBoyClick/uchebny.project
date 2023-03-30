import React from 'react';

function App() {
  const obj = {name: 'john', surname: 'smit'};
  const StringName = `
    <p>
      name: <span>${obj.name}</span>, <br> 
  `;
  const StringSurname = `
  surname: <span>${obj.surname}</span>
</p>
`;

  return <div>
    {StringName} <br/>
    {StringSurname}
    </div>
}

export default App;