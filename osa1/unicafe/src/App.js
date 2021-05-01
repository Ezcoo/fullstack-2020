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

const StatisticsLine = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0 && !props.feedbackGiven) {
    return (
      <div>No feedback given</div>
    )
  }

  if (props.good === 0 && props.neutral === 0 && props.bad === 0 && props.feedbackGiven) {
    return (
      <div></div>
    )
  }

  if (props.selection === "all") {
    return (
      <div>all {props.good + props.neutral + props.bad}</div>
    )
  }

  if (props.selection === "average") {
    return (
      <div>average {(props.good - props.bad) / (props.good + props.neutral + props.bad) || 0}</div>
    )
  }

  if (props.selection === "positive") {
    return (
      <div>positive {props.good / (props.good + props.neutral + props.bad) || 0}</div>
    )
  }

  return (
    <div>No feedback given</div>
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
      <StatisticsLine selection={'all'} good={good} neutral={neutral} bad={bad} feedbackGiven={false}/>
      <StatisticsLine selection={'average'} good={good} neutral={neutral} bad={bad} feedbackGiven={true}/>
      <StatisticsLine selection={'positive'} good={good} neutral={neutral} bad={bad} feedbackGiven={true}/>
    </div> 
  )
}

export default App