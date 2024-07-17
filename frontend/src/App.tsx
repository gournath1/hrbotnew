import { useEffect } from "react";
import { generate } from "shortid";
import "./App.css";

function App() {
  useEffect(() => {
    console.log(generate());
  }, []);

  return <div>Hello there</div>;
}

export default App;
