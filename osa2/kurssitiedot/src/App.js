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
    return (
      <div>
        {props.content.parts.map(part => 
        <Part key={part.id} part={part} />
        )}
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part.name} {props.part.exercises}</p>
      </div>
    )
  }

  const Total = (props) => {

    const parts = props.course.parts
    console.log(parts)

    const total = parts
                  .reduce((sum, part) => sum + part.exercises, 0)

    return (
      <div>
        <h3>total of {total} exercises</h3>
      </div>
    )
  }


  export default App