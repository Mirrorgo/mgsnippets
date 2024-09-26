import { useRef, useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { MGInput } from "./components/mg/input";

function App() {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <Input
        value={count}
        onChange={(cur) => {
          setCount(+cur.target.value);
        }}
      />

      <Button onClick={() => setCount((pre) => pre + 1)}>+1</Button>
      <MGInput ref={ref} />
      <Button onClick={() => console.log(ref.current?.value)}>
        get mgInput
      </Button>
    </>
  );
}

export default App;
