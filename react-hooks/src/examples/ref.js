import React, { useState, useEffect, useRef } from 'react'

//useRef сохраняет состояние при работе с компонентом, но не вызывает сам рендер


function App() {

  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    // setRenderCount(prev => prev + 1)
    renderCount.current++
    console.log(inputRef.current.value);
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()


  return (
    <div>
      <h1>Amount of renders: {renderCount.current}</h1>
      <h2>Previous State: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}></input>
      <button className="btn btn-success" onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
