import React, { useState } from 'react'

const Result = (props) => {
  return (
    <div>{props.title} {props.result}</div>
  )
}

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const App = () => {

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <br/>
      <Button handleClick={addGood} text="good" />
      <Button handleClick={addNeutral} text="neutral" />
      <Button handleClick={addBad} text="bad" />
      <br/>
      <h1>statistics</h1>
      <br/>
      <Result title={'good'} result={good} />
      <Result title={'neutral'} result={neutral} />
      <Result title={'bad'} result={bad} />
      <Result title={'all'} result={good + bad + neutral} />
      <Result title={'average'} result={(good - bad) / (good + neutral + bad) || 0} />
      <Result title={'positive'} result={good / (good + bad + neutral) || 0} />
    </div> 
  )
}

export default App