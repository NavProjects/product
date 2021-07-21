import './App.css';
import React, {useState} from 'react';
import Home from './components/HomeComponent';
import DetailComponent from './components/DetailComponent/DetailComponent';
import EditProduct from './components/EditProduct/EditComponent';
import {Router} from "@reach/router"


function App() {

  const [formState, setFormState] = useState({
    title: "",
    price: 0,
    description: ""
  })

  return (
    <div className="App">
      <Router>
      <Home path="/" formState={formState} setFormState={setFormState}/>
      <DetailComponent path="/:_id"/>
      <EditProduct path="/:_id/edit" formState={formState} setFormState={setFormState}/>
      </Router>
    </div>
  );
}

export default App;
