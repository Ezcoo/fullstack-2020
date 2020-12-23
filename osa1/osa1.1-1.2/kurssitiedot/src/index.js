import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1Name={part1} part1Exercises={exercises1} part2Name={part2} part2Exercises={exercises2} part3Name={part3} part3Exercises={exercises3} />
      <Total totalCredits={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>props.course</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.part1Name} partExercises={props.part1Exercises} />
      <Part partName={props.part2Name} partExercises={props.part2Exercises} />
      <Part partName={props.part3Name} partExercises={props.part3Exercises} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.partName}, {props.partExercises} credits</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.totalCredits}</p>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))
