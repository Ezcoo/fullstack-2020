import React, { useState } from 'react'

const ButtonNext = (props) => {
  return (
    <button onClick={props.handleClick} >
      {'next anecdote'}
    </button>
  )
}

const ButtonVote = (props) => {
  return (
    <button onClick={props.handleClick} >
      {'vote'}
    </button>
  )
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)

  const rngAnecdote = () => {
    let min = Math.ceil(0);
    let max = Math.floor(anecdotes.length - 1);

    let result = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(result)
    setSelected(result)
  }

  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <ButtonVote handleClick={} />
      <ButtonNext handleClick={rngAnecdote} />
    </div>
  )
}

export default App