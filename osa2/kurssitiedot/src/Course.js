import React from 'react'


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

export default Course