import { useState } from "react";
import Slider from "./Slider";
import styles from "./App.module.css";

const App = () => {
  const [resultValue, setResultValue] = useState<number>(0);

  const onRangeChange = (rangeValue: number) => {
    setResultValue(rangeValue);
  };

  return (
    <div className={styles.app}>
      <h1>Slider</h1>
      <Slider onRangeChange={onRangeChange} />
      <p>
        Slider result: <span className={styles.resultValue}>{resultValue}</span>
      </p>
    </div>
  );
};

export default App;
