import { useState } from "react";
import "./App.css";
import dogs from "./dogs";

function App() {
  const [heavydog setheavydog = useState(null);
  console.log("heavydog", heavydog);

  return (
    <>
      {heavydog ? <h1>The best dog is {heavydog}</h1> : null}

      <Dogs
        name="Grandy"
        breed="Alaskan"
        color="Grey"
        setheavydog={setheavydog}
      />

      <Dogs
        name="Dusty"
        breed="Labrador"
        color="brown"
        setheavydog={setheavydog}
      />

      <Dogs
        name="Sleepy"
        breed="french"
        color="lightbrown"
        setheavydog={setheavydog}
  

      />
    </>
  );
}

export default App;
