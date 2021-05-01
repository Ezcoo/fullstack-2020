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

const Statistics = (props) => {
  let all = props.good + props.neutral + props.bad
  let average = (props.good - props.bad) / (props.good + props.neutral + props.bad) || 0
  let positive = props.good / (props.good + props.neutral + props.bad) || 0

  return (
    <div>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div> 
  )
}

export default App