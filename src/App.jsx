import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import "./styles.css";
import { useTheme } from "./contexts/ThemeContext";
import Header from "./components/Header.jsx";
import ButtonContainer from "./components/ButtonContainer.jsx";
import Output from "./components/Output.jsx";

const App = () => {
  const [output, setOutput] = useState("");
  const [operationState, setOperationState] = useState("+");
  const [operationClicked, setOperationClicked] = useState(false);
  const [result, setResult] = useState(0);
  //const [toggleState, setToggleState] = useState(0);

  const { theme, setTheme } = useTheme();

  //if(toggleState === 0) setTheme('first')
  //if(toggleState ===1) setTheme('second')
  //if(toggleState === 2) setTheme('third')

  const handleToggleClick = () => {
    if (theme === "first") setTheme("second");
    if (theme === "second") setTheme("third");
    if (theme === "third") setTheme("first");
  };

  if (operationState === "=") {
    setOutput(result);
    setOperationState("");
    setOperationClicked(false);
  }
  const handleClick = (event) => {
    if (Number(event.target.value) || Number(event.target.value) === 0) {
      if (operationClicked || !output) {
        setOutput(event.target.value);
        setOperationClicked(false);
      } else setOutput(output.concat(event.target.value));
    } else if (
      (event.target.value === "+" ||
        event.target.value === "-" ||
        event.target.value === "/" ||
        event.target.value === "x" ||
        event.target.value === "=") &&
      output
    ) {
      if (operationState === "+") setResult(result + Number(output));
      if (operationState === "-") setResult(result - Number(output));
      if (operationState === "x") setResult(result * Number(output));
      if (operationState === "/") setResult(result / Number(output));
      if (operationState === "") setResult(Number(output));

      setOperationState(event.target.value);
      setOperationClicked(true);
    } else if (event.target.value === "." && output)
      setOutput(output.concat(event.target.value));
    else if (event.target.value === "DEL")
      setOutput(output.slice(0, output.length - 1));
    else setOutput("");
  };

  return (
    <>
      <Header handleToggleClick={handleToggleClick} theme={theme} />
      <Output output={output} />
      <ButtonContainer handleClick={handleClick} />
    </>
  );
};

export default App;
