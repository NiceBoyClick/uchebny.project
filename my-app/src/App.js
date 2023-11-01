import React from 'react';

function App() {
    const obj = {name: 'john', surname: 'smit'};

    return <>
        <p>
            name: {obj.name},
            <br/>
            surname: {obj.surname}
        </p>
    </>;
}

export default App;