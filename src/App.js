import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0); // This is the setState of new react. data is the current data, and setData is the function to update the current state (data). data replaces this.data
  const [data, setData] = useState(null); // This is the setState of new react. data is the current data, and setData is the function to update the current state (data). data replaces this.data

  const apiUrl = "https://quotes15.p.rapidapi.com/quotes/random/";

  useEffect(() => {
    fetch(apiUrl, {
      headers: {
        "X-RapidAPI-Key": "cee1f54ffdmsh50318bd27949e8cp10761bjsn47b1f2608471",
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        setData(result); // Set the data in the component's state
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [count]); // The dependency array ensures the request is made when apiUrl changes

  const quoteText = data ? data["content"] : "Loading...";
  const quoteAuthor = data ? data["originator"]["name"] : "Loading...";

  return (
    <div className="App">
      <div id="quote-box">
        <div className="quote">
          <div id="text" className="quote-text">
            <h2>{quoteText}</h2>
          </div>
          <div id="author" className="quote-author">
            <h3>{quoteAuthor}</h3>
          </div>
        </div>
        <div className="buttons">
          <button id="new-quote" onClick={() => setCount(count + 1)}>
            Next Quote
          </button>
        </div>
        <div className="socials">
          <a id="fb-quote" href="#quote-box">
            Facebook
          </a>
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
