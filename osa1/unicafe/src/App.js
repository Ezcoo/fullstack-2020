import React, { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const FeedbackCounter = (props) => {
  return (
    <tr>
      <td>{props.selection}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const StatisticsLine = (props) => {
  switch(props.selection) {

    case 'all':
      return (
        <tr>
          <td>all</td>
          <td>{props.props.good + props.props.neutral + props.props.bad}</td>
        </tr>
       )

    case 'average':
      return (
        <tr>
          <td>average</td>
          <td>{(props.props.good - props.props.bad) / (props.props.good + props.props.neutral + props.props.bad) || 0}</td>
        </tr>
      )

    case 'positives':
      return (
        <tr>
          <td>positive</td>
          <td>{props.props.good / (props.props.good + props.props.neutral + props.props.bad) || 0}</td>
        </tr>
      )

    default:
      return (
        <td></td>
      )
  }

}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <tbody>
        <tr>
          <td>No feedback given</td>
        </tr>
      </tbody>
    )

  } else {
    return (
      <tbody>
          <FeedbackCounter selection={'good'} value={props.good} />
          <FeedbackCounter selection={'neutral'} value={props.neutral} />
          <FeedbackCounter selection={'bad'} value={props.bad} />
          <StatisticsLine selection={'all'} props={props} />
          <StatisticsLine selection={'average'} props={props} />
          <StatisticsLine selection={'positives'} props={props} />
      </tbody>
    )
  }

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
      <table>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </table>
    </div> 
  )
}

export default App