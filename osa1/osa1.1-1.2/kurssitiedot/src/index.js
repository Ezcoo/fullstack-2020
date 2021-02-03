import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total totalCredits={[part1, part2, part3]} />
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
      <Part partName={props.name} partExercises={props.exercises} />
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
  const exercisesArray = Array.from(props) 
  const totalExercises = props.forEach(value => {
    console.log(value)
  })

  return (
    <div>
      <p>Number of exercises: {props.totalCredits}</p>
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById('root'))
