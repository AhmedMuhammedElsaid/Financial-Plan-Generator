import React, { FunctionComponent } from "react";

interface Props {
  onChange: (key: string, value: string) => void;
  name: string;
  options: any;
  
}
const RadioInput: FunctionComponent<Props> = ({ onChange, name, options }) => {
  return (
    <div className="radio-buttons d-flex flex-column">
      {options.map((value: any, i: number) => (
        <label key={i} className="mx-3  fs-5 text-capitalize text-muted">
          <input
            type="radio"
            className="mx-2"
            value={value}
            name={name}
            onChange={(event) => onChange(name, event?.target?.value)}
          />
          {value}
        </label>
      ))}
    </div>
  );
};

export default RadioInput;
