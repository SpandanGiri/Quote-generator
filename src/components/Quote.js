import {React,useState,useEffect} from 'react'

import twitterIcon from '../twitter.svg';

export const Quote = (props) => {
    

    const [quotes, setQuotes] = useState('');


    const getQuote=()=>{
        var keywords=props.message;
        let url = 	`https://api.adviceslip.com/advice/search/${keywords}`;

        console.log(keywords);

        fetch(url)
                .then(response=>response.json())
                .then(data=>{
                
                    let resp_length=data.total_results;
                    let randNum = Math.floor(Math.random()*resp_length);
                    console.log(`No of items ${resp_length}`);

                    const rawQuote=data.slips[randNum].advice;
                    setQuotes(rawQuote);
                })

        
    }

    useEffect(()=>{
        getQuote();
    },[]);

    const handleClick=()=>{
        if(!props.message){
            alert('Enter keywords first');
        }
        else{
            getQuote();
        }
       
    }


    return (
        <div id="quote-box">
            <div id="text"><p>{quotes}</p></div>

            <div className="buttons">
                <div className="social-media">
                    <a href="#" id="twet-quote">
                        <span><img src={twitterIcon} alt="image" /></span>
                    </a>
                    <a href="#" id="tumlr-quote">
                        <span><img src={twitterIcon} alt="image" /></span>
                    </a>
                </div>

                <button id="new-quote" onClick={handleClick} >New Quote</button>
            </div>
           
        </div>
    )
}
