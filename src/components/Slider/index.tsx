import React, { useState } from "react";

import { Input } from "./styles";
import Label from "../Label";
import { SliderProps } from "./types";

function Slider({ id, children }: SliderProps) {
  const [rangeValue, setRangeValue] = useState(0);

  const rangeSlide = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div>
        <Label htmlFor={id}>Slide</Label>
      </div>
      <Input
        id={id}
        type="range"
        value={rangeValue}
        min="0"
        max="100"
        style={{
          background: `linear-gradient(to right, #e9a08c 0%, #ff96b7 ${rangeValue}%, #fff ${rangeValue}%, #fff 100%)`,
        }}
        onChange={rangeSlide}
      />
    </div>
  );
}

export default Slider;
