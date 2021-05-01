import React, { useState } from 'react'

const Result = (props) => {
  return (
    <div>{props.title} {props.result}</div>
  )
}

const App = () => {

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <br/>
      <button onClick={addGood}>
        good
      </button>
      <button onClick={addNeutral}>
        neutral
      </button>
      <button onClick={addBad}>
        bad
      </button>
      <br/>
      <h1>statistics</h1>
      <br/>
      <Result title={'good'} result={good} />
      <Result title={'neutral'} result={neutral} />
      <Result title={'bad'} result={bad} />
    </div> 
  )
}

export default App