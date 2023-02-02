import { useState } from "react";
import Slider from "./Slider";
import styles from "./App.module.css";

const App = () => {
  const [resultValue, setResultValue] = useState<number>(0);

  const handleRangeChange = (rangeValue: number) => {
    setResultValue(rangeValue);
  };

  return (
    <div className={styles.app}>
      <h1>Slider</h1>
      <Slider handleRangeChange={handleRangeChange} />
      <div>
        Slider result: <span className={styles.resultValue}>{resultValue}</span>
      </div>
    </div>
  );
};

export default App;
