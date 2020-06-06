import React, { useState } from 'react';

const useRadioList = ({ label, optsObj }) => {
  const [ selected, setSelected ] = useState("")
  const id = `use-radioList-${label}`;

  const RadioList = () => (
    <form id={id}>
      {
        Object.keys(optsObj).map(opt => (
          <label htmlFor={opt} key={opt}>
            <input
              onChange={(e) => setSelected(e.target.name)}
              type="radio"
              id={opt}
              name={opt}
              checked={selected === opt}
            />
            { opt }
          </label>
        ))
      }
    </form>
  );

  return (selected, RadioList, setSelected);
};

export default useRadioList;

