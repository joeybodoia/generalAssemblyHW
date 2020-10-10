import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      <h1 >{state.tardis.name}</h1>
    </div>
  );
}

export default App;
