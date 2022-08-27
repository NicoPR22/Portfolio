import { useState } from "react";

const  quotes =[{
    text: "if there is no love there is nothing",
    author: "Indio Solari"
},
{
    text: "So understand don't waste your time always searching for those wasted years face up, make your stand realize you're living in the golden years",
    author: "Iron Maiden"
},
{
    text: "",
    author: ""
}]

const Quotes = () => {

    const [pos, setPos] = useState(0)

    const handleClick = ()=> {
        
        pos === quotes.length -1
        ? setPos(0)
        : setPos(pos + 1)
    }

    return (
      <div id="quote-box">
        <p id="text" className="text">"{quotes[pos].text}"</p>
        <p id="author" className="author">{quotes[pos].author}</p> 
        <button className="new-btn btn btn-primary" onClick={() => handleClick()} id="new-quote">
          New Quote
        </button>
      </div>
    );
  };
  
  export default Quotes;

  
  