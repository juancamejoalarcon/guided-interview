import { useEffect, useState } from "react";
import "./InputRepeat.css";
import { Repeat } from "@/lib/interfaces/Repeat.interface";
import { GuidedInterview } from "@/lib/GuidedInterview";
import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";

function InputRepeat(props: { interview: GuidedInterview; question: Repeat }) {
  const { id, title, required, value, placeholder, range } = props.question;

  useEffect(() => {}, []);

  return (
    <div className="InputRepeat">
      <div className="container">
        <h2>{title}</h2>
        <div className="slider">
          <Slider
            valueLabelDisplay="auto"
            marks
            min={range.min}
            max={range.max}
            defaultValue={parseInt(value)}
            onChange={(
              event: any,
              value: number | number[],
              activeThumb: number
            ) => {
              if (event.target && event.target.value)
                props.interview.setValue(id, event.target.value || value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default InputRepeat;
