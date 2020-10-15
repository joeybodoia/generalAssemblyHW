import React from 'react';
import logo from './logo.svg';
import './App.css';
import Divone from "./components/divone"

function App() {
  const [state,setState] = React.useState({
    tardis:{
      name: "Time and Relative Dimension in Space",
      caps: false
    }
  })
  const changeIt = (text) => {
    if (state.tardis.caps) {
      setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }

  }
  return (
    <div className="App" onClick={()=>{changeIt(state.tardis.name)}}>
      {/* <h1 >{state.tardis.name}</h1> */}
      <Divone h3={state}/>
    </div>
  );
}

export default App;
