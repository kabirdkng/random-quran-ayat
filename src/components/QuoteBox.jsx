import React,{ useState, useEffect } from 'react'
import axios from 'axios';


const QuoteBox = () => {
    const [quote, setQuote] = useState('');
    const [refference, setRefference] = useState('');
    
    const ayatNumber = () => {
      const ayat = Math.floor(Math.random()*6236+1);
      return ayat;
    }
    const fetchQuote = async() => {
      await axios
         .get(`https://api.alquran.cloud/v1/ayah/${ayatNumber()}/en.asad`)
         .then((response)=>{
        const { text , surah, numberInSurah} = response.data.data
        console.log(surah.englishName)
        setQuote(text)
        setRefference( surah.englishName + " " + "(" + surah.englishNameTranslation + ")" + " " + surah.number +":"+ numberInSurah)
      })
        .catch((error)=>{
        console.log(error);
      });
    }
    
    useEffect(()=>{
      fetchQuote();
    }, [])
    const handleNewQuote = () => {
      fetchQuote();
    };
  
    return (
      <div className='container'>
        <h1>Random Quran Ayah</h1>
          <div id='quote-box' className="box">
            <div id="text" className='text'>{quote}</div>
            <div id="author" className='author'> - <span>{refference}</span> </div>
            <div className='actions'>
               <button id="new-quote" className='button' onClick={handleNewQuote}>Refresh</button>
               <a href="twitter.com/intent/tweet" id="tweet-quote" className='button'>Tweet Ayah</a>
           </div>
          </div>
          <p>Designed by <a href='https://x.com/kabir_crypto' target='_blank'>Kabir</a></p>
      </div>
      
    );
}

export default QuoteBox