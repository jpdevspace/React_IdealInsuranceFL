import React, { useState } from 'react';

const useRadioList = (label, optsObj) => {
  const [ selected, setSelected ] = useState("");
  const id = `use-radioList-${label.replace(" ", "").toLowerCase()}`;

  const RadioList = () => (
    <form id={id}>
      {
        Object.keys(optsObj).map(opt => (
          <label htmlFor={opt} key={opt}>
            <input
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
    </form>
  );

  return [selected, RadioList, setSelected];
};

export default useRadioList;

