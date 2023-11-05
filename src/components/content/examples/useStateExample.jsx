'use client'; // needed if useState is being used in the component

import { useState } from 'react';

export default function UseStateExample() {
  // we provide the state variable name and a setter function name for it
  const [stateVar, setStateVar] = useState(true);

  // for this example, let's assume that the state is a boolean (t/f)
  const toggleState = () => {
    setStateVar(!stateVar);
  };
  return (
    <div
      style={{ border: 'solid 2px black', padding: '16px', cursor: 'pointer' }}
      onClick={toggleState}
    >
      {stateVar ? 'stateVar is true' : 'stateVar is false'}
    </div>
  );
}
