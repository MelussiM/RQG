import './HomeDiv.css';
import COLORS_ARRAY from './colorsArray';
import { useState, useEffect } from 'react';
import { FaTwitter } from "react-icons/fa";
export default function HomeDiv() {
 const [accentColor, setAccentColor] = useState('#282c34')

  const[quotes, setQuotes] = useState("");

  const getQuote = async () =>{
    await fetch("https://type.fit/api/quotes").then((res) => res.json()).then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    })
    let randomNums = Math.floor(Math.random() * COLORS_ARRAY.length);
    setAccentColor(COLORS_ARRAY[randomNums])
  }

  useEffect(() => {
    getQuote(); 
  },[])
  
  return (
    <div className='main-div' style={{backgroundColor: accentColor}}>
         <div className='quote-box' id="quote-box" style={{color: accentColor}}>
          <p className='quote-text'>
            <span id="text">
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={accentColor} className="bi bi-quote" viewBox="0 0 16 16">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
          </svg>
              {quotes.text}
            </span>
            
          </p>
          <p className='author' id="author">
            <span className='cAuthor'>
              - {quotes.author}
            </span>
          </p>
          
          <div className='buttonContainer' >
            <button className='btn' id="new-quote" onClick={getQuote} style={{backgroundColor: accentColor}}>
              Generate Quote
            </button>
          </div>

          <div className='twoo'>
            <a 
            style={{backgroundColor: accentColor}}
            href={"https://twitter.com/intent/tweet?text=hello"} 
            target='_blank'
            rel='noopener noreferrer'
            className='tweet'
            id="tweet-quote"
            >
              <FaTwitter /> 
              <span className='tooltiptext'>
                  Share on Twitter!
              </span>
            </a>
            
          </div>
        </div>
    </div>
       
    
    
  )
}
