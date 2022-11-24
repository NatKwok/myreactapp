import React, { useState, useEffect } from "react";
function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      const interval = setInterval(() =>
        setTime(new Date().toLocaleTimeString(), 1000)
      );
      return () => {
        clearInterval(interval);
      };
    }, [time]);
  
    return <p>React Clock: {time} </p>;
  }

  export default Clock;