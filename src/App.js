import React, { useState } from "react";
import { Button } from "react-bootstrap";

const App = () => {
  const [advice, setAdvice] = useState();
  const [count, setCount] = useState(0);

  // FETCH ADVICE
  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  };

  return (
    <div className="bg-light text-center m-3">
      <h1 className="p-2 text-primary ">
        {count < 1 ? "An advice" : <>{advice}</>}
      </h1>
      <Button variant="outline-success px-4 py-2 m-4" onClick={fetchAdvice}>
        Click here to read
      </Button>
      <p className="bg-warning w-50 mx-auto text-black font-bold p-3">
        You clicked <strong> {count} </strong> {count > 1 ? "times" : "time"}
      </p>
    </div>
  );
};

export default App;
