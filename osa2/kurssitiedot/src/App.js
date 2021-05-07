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


  export default App