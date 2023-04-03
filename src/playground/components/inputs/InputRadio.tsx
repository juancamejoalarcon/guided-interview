import { useEffect, useState } from "react";
import "./InputRadio.css";
import { MultipleChoice } from "../../../lib/interfaces/MultipleChoice.interface";
import { GuidedInterview } from "../../../lib/GuidedInterview";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function InputRadio(props: { interview: GuidedInterview; question: MultipleChoice }) {

  const { id, title, required, value, placeholder, choices } = props.question;

  useEffect(() => {}, []);

  return (
    <div className="InputRadio">
      <div className="container">
        <h2>{title}</h2>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={choices.find(choice => choice.checked === true)?.label}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              props.interview.setValue(id, event.target.value)
            }}
          >
            {choices.map((choice, index) => {
                return (
                    <FormControlLabel
                    key={index}
                    value={choice.label}
                    control={<Radio />}
                    label={choice.label}
                    />
                );
            })}
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default InputRadio;
