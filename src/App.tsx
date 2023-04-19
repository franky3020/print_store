import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/button';
import Square from "./component/button";
import ImgCard from "./component/imgCard";

function App() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.tsx</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
    return (
        <div className="flex ">

            <span className="mx-4">
                <ImgCard/>
            </span>

            <span className="mx-4">
                <ImgCard/>
            </span>

            <span className="mx-4">
                <ImgCard/>
            </span>

            <span className="mx-4">
                <ImgCard/>
            </span>


            {/*<Square></Square>*/}
        </div>
    );
}

export default App;
