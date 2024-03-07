import { useState } from "react";
import { Button } from "@mui/material";
import "./App.css"
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <h1>{count}</h1>
      <Button onClick={() => setCount(count + 1)} variant="contained" color="secondary" size="small">Click me</Button>
      <Button onClick={() => setCount(count - 1)} variant="contained" color="secondary" size="small">Click me</Button>
      <Button onClick={() => setCount(count - 1)} variant="contained" color="secondary" size="small">Click me</Button>
      <Button onClick={() => setCount(count - 1)} variant="contained" color="secondary" size="small">Click me</Button>
      <Button onClick={() => setCount(count - 1)} variant="contained" color="secondary" size="small">Click me</Button>
      <Button onClick={() => setCount(count - 1)} variant="contained" color="secondary" size="small">Click me</Button>
    </div>
  );
};

export default App;
