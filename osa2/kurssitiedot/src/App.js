import React from 'react'

const App = () => {
    const course =  {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        }, 
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return (
      <div>
        <Course course={course} />
      </div>
    )
  }

  const Course = (props) => {
    return (
      <div>
        <Header header={props.course} />
        <Content content={props.course} />
        <Total course={props.course} />
      </div>
    )
  }
  
  const Header = (props) => {
    return (
      <div>
        <h1>{props.header.name}</h1>
      </div>
    )
  }
  
  const Content = (props) => {
    console.log(props)
    return (
      <div>
        {props.content.parts.map(part => 
        <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  const Part = (props) => {
    console.log(props)
    return (
      <div>
        <p>{props.part.name} {props.part.exercises}</p>
      </div>
    )
  }

  const Total = (props) => {
    console.log(props)

    let exercisesSum = 0

    const total = props.course.parts.reduce((exercisesSum, currentValue) => {
      exercisesSum = exercisesSum + currentValue.exercises
      console.log('voi vittu', exercisesSum, currentValue.exercises)
    })

    return (
      <div>
        <h3>total of {total} exercises</h3>
      </div>
    )
  }


  export default App