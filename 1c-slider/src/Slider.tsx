import { useState } from "react";
import "./Slider.css";

const Slider = ({
  handleRangeChange,
}: {
  handleRangeChange: (value: number) => void;
}) => {
  const [value, setValue] = useState(0);

  const getSliderBackgroundSize = (value: number) => {
    return { backgroundSize: `${value}% 100%` };
  };

  return (
    <input
      type="range"
      id="slider"
      min={0}
      max={100}
      value={value}
      aria-valuenow={value}
      onChange={(e) => setValue(e.target.valueAsNumber)}
      onPointerUp={() => handleRangeChange(value)}
      style={getSliderBackgroundSize(value)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};

export default Slider;
