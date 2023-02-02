import { useState } from "react";
import styles from "./Slider.module.css";

const Slider = ({
  onRangeChange,
  min = 0,
  max = 100,
}: {
  onRangeChange: (value: number) => void;
  min?: number;
  max?: number;
}) => {
  const [value, setValue] = useState(0);

  const getSliderBackgroundSize = (value: number) => {
    return { backgroundSize: `${value}% 100%` };
  };

  return (
    <input
      className={styles.slider}
      type="range"
      min={min}
      max={max}
      value={value}
      aria-valuenow={value}
      onChange={(e) => setValue(e.target.valueAsNumber)}
      onPointerUp={() => onRangeChange(value)}
      style={getSliderBackgroundSize(value)}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-label="slider"
    />
  );
};

export default Slider;
