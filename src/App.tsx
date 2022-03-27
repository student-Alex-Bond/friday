import React from 'react';
import './App.css';
import {Navigation, routes} from "./componets/Navigation/Navigation";


function App() {
    return (
        <div className="App">
            <div className={'container'}>
                <Navigation routes={routes}/>
            </div>
        </div>
    );
}

export default App;
