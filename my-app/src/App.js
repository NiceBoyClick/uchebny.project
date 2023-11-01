import React from 'react';

function App() {
    const items = (
        <>
            <li>text1</li>
            <li>text2</li>
            <li>text3</li>
        </>
    );

    return <ul>
        {items}
    </ul>
}

export default App;