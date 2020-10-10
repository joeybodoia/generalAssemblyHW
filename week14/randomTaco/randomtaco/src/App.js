import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./components/Display"
import Form from "./components/Form"

function App() {
  // API
  const [tacos,setTacos] = React.useState({})


  const getData = async () => {
    const response = await fetch("http://taco-randomizer.herokuapp.com/random/?full-tack=true")
    const data = await response.json()
    console.log("data",data)
    setTacos(data)
} 

React.useEffect(()=>{
  getData()
},[])


  // fetch("http://taco-randomizer.herokuapp.com/random/?full-tack=true")
  // .then((response) => response.json()) //turn response into object
  // .then((data) => {
  //   //logging the final data
  //   console.log(data);
  // });
  return (
    <div className="App">
      <Form/>
      <Display taco={tacos}/>

    </div>
  );
}

export default App;
