import "./App.css";
import React, { useState } from "react";
import { Button } from "components/Button";
import { LaptopItem } from "components/LaptopItem";
import { Radio } from "components/Radio";
import { Input } from "components/Input";

function App() {
  const [selected, setSelected] = useState("first");
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <Button title="ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ" />
      <LaptopItem
        imageUrl={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
        }
      />
      <Radio
        value="first"
        selected={selected}
        text="First Radio Button"
        onChange={setSelected}
      />
      <Radio
        value="second"
        selected={selected}
        text="Second Radio Button"
        onChange={setSelected}
      />
      <Input
        onChange={setInput}
        value={input}
        hint="My hint"
        placeholder="Input"
        label="Label"
        disabled={false}
      />
    </div>
  );
}

export default App;
