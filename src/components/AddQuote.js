import {React,useState} from 'react'


export const AddQuote = (props) => {

    const[keywords,setKeywords]=useState('');

    const getKeywords=(e)=>{
        setKeywords(e.target.value);
    }

    const submit=(e)=>{
        e.preventDefault();
        props.callback(keywords);
    }
    
    
    return (
        <div class="input_box">
            <input className="inpt" type="text" placeholder="keywords" onChange={getKeywords}/>
            <button className="search" onClick={submit}>search</button>
        </div>
    )
}
