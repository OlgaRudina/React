import React, { useState, useMemo, useEffect } from 'react'

function App() {

  const [number, setNumber] = useState(42)
  const computed = useMemo(() => { return complexCompute(number) }, [number])
  const [colored, setColored] = useState(false)
  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])

  function complexCompute(num) {
    let i = 0
    while (i < 1000000000) i++
    return num * 2
  }

  useEffect(() => {
    console.log('styles changed');
  }, [styles])

  return (
    <>
      <h1 style={styles}>Calculated prop: {computed}</h1>
      <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Substract</button>
      <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Change</button>
    </>
  );
}

export default App;
