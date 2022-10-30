import React, {useState} from "react";

function App() {

   setInterval(updateTime, 1000);

   const now = new Date().toLocaleTimeString('en-US', { hour12: false, 
      hour: "numeric", 
      minute: "numeric",
      second: 'numeric'});
   
   const [time, setTime] = useState(now);

   function updateTime() {
      const newTime = new Date().toLocaleTimeString('en-US', { hour12: false, 
         hour: "numeric", 
         minute: "numeric",
         second: 'numeric'});
      setTime(newTime);
   }

   return (
      <div className="container">
         <h1>{time}</h1>
      </div>
   );
}

export default App;
