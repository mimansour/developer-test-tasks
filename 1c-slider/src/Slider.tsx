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
    <div>
      <label htmlFor="slider" className={styles.sliderLabel}>
        Slider
      </label>
      <input
        className={styles.slider}
        id="slider"
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
    </div>
  );
};

export default Slider;
