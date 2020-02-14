import React, { useState, useEffect } from "react";
import axios from 'axios';

function TweetsFetching() {
  const [tweets,setTweets] = useState([]);

  useEffect(() => { 
      axios
      .get("http://localhost:3000/tweets/index.json")
      .then(res => {
        console.log(res)            
        setTweets(res.data)
      })
      .catch(err => {
        console.log(err)
      })  
  },[])   
return (
    <div>
      <ul>
        {
          tweets.map(tweet => <li key={tweet.id}>{tweet.text}</li>)
        }
      </ul>
    </div>

)
};
export default TweetsFetching