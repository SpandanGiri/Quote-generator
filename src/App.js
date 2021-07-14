import {React,useState} from 'react';
import './App.css';
import {Quote} from './components/Quote';
import  {AddQuote}  from './components/AddQuote';

function App() {

    const [message,setMessage]=useState('');

    const callback=(childData)=>{
      setMessage(childData);
    }



  return (
    <div className="App">
      <AddQuote callback={callback}/>
      <Quote message={message}/>
    </div>
  );
}

export default App;
