import React, { useState } from 'react';
import { CheckboxList, CheckboxInput } from "../Card";

const useRadioList = (label, initialSelection, optsObj) => {
  const [ selected, setSelected ] = useState(initialSelection);
  const id = `use-radioList-${label.replace(" ", "").toLowerCase()}`;

  const RadioList = () => (
    <form id={id}>
      <CheckboxList>
        {
          Object.keys(optsObj).map(opt => (
            <label htmlFor={opt} key={opt}>
              <CheckboxInput
                onChange={(e) => setSelected(e.target.value)}
                type="radio"
                id={opt}
                name={id}
                value={optsObj[opt]}
                checked={selected === optsObj[opt]}
              />
              { optsObj[opt] }
            </label>
          ))
        }
      </CheckboxList>
    </form>
  );

  return [selected, RadioList, setSelected];
};

export default useRadioList;

